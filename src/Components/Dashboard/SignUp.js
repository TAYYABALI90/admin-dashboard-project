import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RouteConstants from '../../RoutesConstant'
import Logo from './Logo'

export default function SignUp() {

  let navigate = useNavigate();

  let [firstName, setFirstName] = useState("");

  let [lastName, setLastName] = useState("");

  let [username, setUsername] = useState("");

  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  let handleSubmit = (e) => {

    e.preventDefault();

    fetch("http://localhost:8000/auth/register", {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ firstName, lastName, username, email, password })

    })

      .then((response) => {

        navigate(RouteConstants.logIn);

      })

      .catch(() => {


      });

  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 my-5 py-5" style={{ margin: "105px 115px 125px" }}>
            <div className="card my-3" style={{ backgroundColor: "navy" }}>
              <div className="card-header border-bottom border-light">
                <h3 className="card-title"><Logo></Logo></h3>
              </div>
              <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="card-body text-white">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text"
                      className="form-control"
                      onChange={(e) => { setFirstName(e.target.value) }}
                      placeholder="Enter Your First Name" />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text"
                      className="form-control"
                      onChange={(e) => { setLastName(e.target.value) }}
                      placeholder="Enter Your Last Name" />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text"
                      className="form-control"
                      onChange={(e) => { setUsername(e.target.value) }}
                      placeholder="Enter Your Username" />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-envelope" /></span>
                    </div>
                    <input type="email"
                      className="form-control"
                      onChange={(e) => { setEmail(e.target.value) }}
                      placeholder="Enter Your Email Address" />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input type="password"
                      className="form-control"
                      onChange={(e) => { setPassword(e.target.value) }}
                      placeholder="Enter Your Password" />
                  </div>
                  <div className="link-group">
                    <div className="signup">
                      <button class="btn btn-outline-light px-3">Sign up</button>
                    </div>
                    <div className="login mt-2">
                      <span> Already have an account? </span> <Link to={RouteConstants.logIn} className="btn btn-outline-light px-3 mx-2">Log in</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
