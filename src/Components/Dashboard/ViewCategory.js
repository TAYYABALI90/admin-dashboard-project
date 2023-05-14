import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Spinner from './Spinner';

export default function ViewCategory() {

  let [data, setData] = useState("");

  let [error, setError] = useState("");

  let [isPending, setIsPending] = useState(true);

  let [update, setUpdate] = useState("");

  useEffect(() => {

    setTimeout(() => {

      fetch("http://localhost:8000/categories")

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

    fetch(`http://localhost:8000/categories/${id}`, {

      method: "DELETE"

    })

      .then((response) => {

        setUpdate("Updated");

      })

      .catch((error) => {

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
                      <th
                        className="sorting sorting_asc"
                        tabIndex={0}
                        aria-controls="example1"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending">ID
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example1"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="CSS grade: activate to sort column ascending">CATEGORIES NAME
                      </th>
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
                        aria-label="CSS grade: activate to sort column ascending">DELETE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.map((category) => (
                      <tr>
                        <td>{category.id}</td>
                        <td>{category.title}</td>
                        <td>
                          <Link to={`/dashboard/editCategory/${category.id}`} className="btn btn-info">Edit</Link>
                        </td>
                        <td>
                          <button className="btn btn-danger" onClick={() => { handleDelete(category.id) }}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th rowSpan={1} colSpan={1}>ID</th>
                      <th rowSpan={1} colSpan={1}>CATEGORIES NAME</th>
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
