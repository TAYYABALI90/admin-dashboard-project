import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RouteConstants from '../../RoutesConstant';
import Logo from './Logo'
import Spinner from './Spinner';

export default function EditUser() {

    let { id } = useParams();

    let navigate = useNavigate();

    let [firstName, setFirstName] = useState("");

    let [lastName, setLastName] = useState("");

    let [username, setUsername] = useState("");

    let [email, setEmail] = useState("");

    let [password, setPassword] = useState("");

    let [data, setData] = useState("");

    let [error, setError] = useState("");

    let [isPending, setIsPending] = useState(true);

    useEffect(() => {

        fetch(`http://localhost:8000/users/${id}`)

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

            })

    }, []);

    let handleSubmit = (e) => {

        e.preventDefault();

        fetch(`http://localhost:8000/users/${id}`, {

            method: "PATCH",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ firstName, lastName, username, email, password })

        })

            .then((response) => {

                navigate(`/dashboard${RouteConstants.viewUser}`);

            })

            .catch((error) => {

                setError(error.message);

            });

    };

    return (
        <>
            {isPending && <Spinner></Spinner>}
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 py-5">
                        <div className="card my-3" style={{ backgroundColor: "navy" }}>
                            <div className="card-header border-bottom border-light">
                                <h3 className="card-title"><Logo></Logo></h3>
                            </div>
                            {data && <form onSubmit={(e) => { handleSubmit(e) }}>
                                <div className="card-body text-white">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="text"
                                            className="form-control"
                                            defaultValue={data.firstName}
                                            onChange={(e) => { setFirstName(e.target.value) }}
                                            placeholder="Enter Your First Name" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="text"
                                            className="form-control"
                                            defaultValue={data.lastName}
                                            onChange={(e) => { setLastName(e.target.value) }}
                                            placeholder="Enter Your Last Name" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text"
                                            className="form-control"
                                            defaultValue={data.username}
                                            onChange={(e) => { setUsername(e.target.value) }}
                                            placeholder="Enter Your Username" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                        </div>
                                        <input type="email"
                                            className="form-control"
                                            defaultValue={data.email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            placeholder="Enter Your Email Address" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input type="password"
                                            className="form-control"
                                            defaultValue={data.password}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            placeholder="Enter Your Password" />
                                    </div>
                                    <div className="link-group">
                                        <div className="register">
                                            <button className="btn btn-outline-light px-3">Edit User</button>
                                        </div>
                                    </div>
                                </div>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
            {error && <h1>{error}</h1>}
        </>
    )
}
