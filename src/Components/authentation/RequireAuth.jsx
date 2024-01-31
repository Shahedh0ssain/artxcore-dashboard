import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import useToken from '../../Hooks/useToken';

const RequireAuth = () => {

    // const [user,loading] = useAuthState(auth);
    const storedToken = localStorage.getItem('AdminToken');
    // const [token] = useToken();
    const location = useLocation();
    // console.log(storedToken);

    // if (loading) {
    //     return <div>Loading....</div>
    // }

    if (!storedToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // return <Navigate to="/" replace />
    return <Outlet />;

};

export default RequireAuth;