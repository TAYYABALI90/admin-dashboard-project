import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import RouteConstants from '../../RoutesConstant'
import Logo from './Logo'

export default function LogIn() {

    let navigate = useNavigate();

    let [email, setEmail] = useState();

    let [password, setPassword] = useState("");

    let handleSubmit = (e) => {

        e.preventDefault();

        fetch("http://localhost:8000/auth/signin", {

            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ email, password })

        })

            .then((response) => {

                return response.json();

            })

            .then((data) => {

                localStorage.setItem("token", data.accessToken);

                navigate(RouteConstants.dashboard);

            })

            .catch(() => {


            });

    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 py-5" style={{margin:"105px 115px 125px"}}>
                        <div className="card my-4" style={{ backgroundColor: "navy" }}>
                            <div className="card-header border-bottom border-light">
                                <h3 className="card-title"> <Logo></Logo> </h3>
                            </div>
                            <form onSubmit={(e) => { handleSubmit(e) }}>
                                <div className="card-body text-white">
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
                                        <div className="login">
                                            <button class="btn btn-outline-light px-3">Login</button>
                                        </div>
                                        <div className="signup mt-2">
                                            <span> Don't have an account? </span> <Link to={RouteConstants.signUp} className="btn btn-outline-light px-3 mx-2">Sign up</Link>
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

