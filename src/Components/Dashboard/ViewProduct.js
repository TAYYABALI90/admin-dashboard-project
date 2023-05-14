import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Spinner from './Spinner';

export default function ViewProduct() {

    let [data, setData] = useState("");

    let [error, setError] = useState("");

    let [isPending, setIsPending] = useState(true);

    let [update, setUpdate] = useState("");

    useEffect(() => {

        setTimeout(() => {

            fetch("http://localhost:8000/products")

                .then((response) => {

                    if (!response.ok) {

                        throw new Error(response.status);

                    };

                    return response.json();

                })

                .then((data) => {

                    setData(data);

                    setIsPending(false);

                })

                .catch((error) => {

                    setError(error);

                    setIsPending(false);

                });

        }, 2000);

    }, [update]);

    let handleDelete = (id) => {

        setUpdate("");

        fetch(`http://localhost:8000/products/${id}`, {

            method: "DELETE"

        })

            .then((response) => {

                setUpdate("Updated");

            })

            .catch((error) => {

                setError(error.message);

            });

    };

    return (
        <>
            {isPending && <Spinner></Spinner>}
            <div className="card">
                <div className="card-header" style={{ backgroundColor: "navy" }}>
                    <h2 className="card-title"><Logo></Logo></h2>
                </div>
                <div className="card-body">
                    <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                        <div className="row">
                            <div className="col-sm-12">
                                <table id="example1" className="table table-bordered table-striped dataTable dtr-inline" aria-describedby="example1_info">
                                    <thead>
                                        <tr>
                                            <th className="sorting sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ID
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Browser: activate to sort column ascending">TITLE</th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">PRICE</th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Engine version: activate to sort column ascending">DESCRIPTION</th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="CSS grade: activate to sort column ascending">CATEGORY</th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="CSS grade: activate to sort column ascending">IMAGE</th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="CSS grade: activate to sort column ascending">EDIT</th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example1"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="CSS grade: activate to sort column ascending">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map(product => (
                                            <tr>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>{product.description}</td>
                                                <td>{product.category}</td>
                                                <td><a href={product.image} target="_blank" rel="noreferrer">View Image</a></td>
                                                <td>
                                                    <Link to={`/dashboard/editProduct/${product.id}`} className="btn btn-info">Edit</Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => { handleDelete(product.id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th rowSpan={1} colSpan={1}>ID</th>
                                            <th rowSpan={1} colSpan={1}>TITLE</th>
                                            <th rowSpan={1} colSpan={1}>PRICE</th>
                                            <th rowSpan={1} colSpan={1}>DESCRIPTION</th>
                                            <th rowSpan={1} colSpan={1}>CATEGORY</th>
                                            <th rowSpan={1} colSpan={1}>IMAGE</th>
                                            <th rowSpan={1} colSpan={1}>EDIT</th>
                                            <th rowSpan={1} colSpan={1}>DELETE</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {error && <h1>{error}</h1>}
        </>
    )
}
