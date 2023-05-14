import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RouteConstants from '../../RoutesConstant';
import Logo from './Logo';

export default function AddCategory() {

  let navigate = useNavigate();

  let [title, setTitle] = useState("");

  let [error, setError] = useState("");

  let handleSubmit = (e) => {

    e.preventDefault();

    fetch("http://localhost:8000/categories", {

      method: "POST",

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
    <>
      <div className='container'>
        <div className="row">
          <div className="col-12 my-5 py-5">
            <div className="card my-5" style={{ backgroundColor: "navy" }}>
              <div className="card-header border border-bottom-light">
                <h3 className="card-title"><Logo></Logo></h3>
              </div>
              <form className="form-horizontal" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="card-body text-white">
                  <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">Enter Your Product Category</label>
                    <input type="text"
                      className="form-control"
                      id="Text"
                      onChange={(e) => { setTitle(e.target.value) }}
                      placeholder="Enter Your Product Category" />
                  </div>
                </div>
                <div className="card-footer border border-bottom-light">
                  <button type="submit" className="btn btn-outline-light my-2 mx-3">Add Category</button>
                </div>
              </form>
              {error && <h1>{error}</h1>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
