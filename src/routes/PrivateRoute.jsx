import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {

    const {loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    const {user} = use(AuthContext);

    if(user) return children;

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;