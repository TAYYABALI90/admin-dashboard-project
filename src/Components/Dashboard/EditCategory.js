import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RouteConstants from '../../RoutesConstant';
import Logo from './Logo';


export default function EditCategory() {

    let { id } = useParams();

    let navigate = useNavigate();

    let [title, setTitle] = useState("");

    let [data, setData] = useState("");

    let [isPending, setIsPending] = useState(true);

    let [error, setError] = useState("");


    useEffect(() => {

        fetch(`http://localhost:8000/categories/${id}`)

            .then((response) => {

                if (!response.ok) {

                    throw new Error(response.status);

                }

                return response.json();

            })

            .then((data) => {

                setData(data);

                setIsPending(false);

            })

            .catch((error) => {

                setError(error);

                setIsPending(false);

            })

    });

    let handleSubmit = (e) => {

        e.preventDefault();

        fetch(`http://localhost:8000/categories/${id}`, {

            method: "PATCH",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ title })

        })

            .then((response) => {

                navigate(`/dashboard${RouteConstants.viewCategory}`);

            })

            .catch((error) => {

                setError(error.message);

            });

    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 my-5 py-5">
                    <div className="card my-5" style={{ backgroundColor: "navy" }}>
                        <div className="card-header border border-bottom-light">
                            <h3 className="card-title"><Logo></Logo></h3>
                        </div>
                        {isPending && <h1>Loading...</h1>}
                        <form className="form-horizontal" onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="card-body text-white">
                                <div className="form-group my-2">
                                    <label htmlFor="exampleInputPassword1">Edit Your Product Category</label>
                                    {data && <input type="text"
                                        className="form-control"
                                        defaultValue={data.title}
                                        id="Text"
                                        onChange={(e) => { setTitle(e.target.value) }}
                                        placeholder="Edit Your Product Category" />}
                                </div>
                            </div>
                            <div className="card-footer border border-bottom-light" style={{ backgroundColor: "navy" }}>
                                <button type="submit" className="btn btn-outline-light my-2 mx-3">Edit Category</button>
                            </div>
                        </form>
                        {error && <h1>{error}</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}
