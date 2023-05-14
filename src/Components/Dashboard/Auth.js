import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import RouteConstants from '../../RoutesConstant';

export default function Auth() {

    let authToken = localStorage.getItem("token");

    return (
        <>
            { authToken ? <Outlet></Outlet> : <Navigate to={RouteConstants.logIn}></Navigate> }
        </>
    )
}
