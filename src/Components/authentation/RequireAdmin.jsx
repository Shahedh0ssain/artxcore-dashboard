import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useUserTypeCheck from '../../Hooks/useUserCheck';
// import useToken from '../../Hooks/useToken';

const RequireAdmin = () => {

    const [userTypeCheck, isLoading, error] = useUserTypeCheck();
    let user_type = userTypeCheck?.data?.user_type;
    // let admin = userTypeCheck?.data?.user_type?.slice(-6);

    if (!user_type === 'supreme_admin' || !user_type === 'content_writer' || !user_type === 'content_writer_admin') {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;

};

export default RequireAdmin;