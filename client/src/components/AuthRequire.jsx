import React from 'react';
import {useLocation, Navigate,Outlet} from "react-router";
import App from "../App";

const AuthRequire = () => {
    const token = localStorage.getItem('token')
    const location = useLocation()
    return (
        token ?
            <Outlet/>
            :
            <Navigate to="/login" state={{from: location}} replace/>
    );
};

export default AuthRequire;