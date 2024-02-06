import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useUserTypeCheck from '../../Hooks/useUserCheck';
// import useToken from '../../Hooks/useToken';

const RequireAuth = () => {

    const storedToken = localStorage.getItem('AdminToken');
    const location = useLocation();
    const [userTypeCheck, isLoading, error] = useUserTypeCheck();

    if (error) {
        console.log('requere auth error')
    }

    if (isLoading) {
        console.log('loading')
    }

    if (!storedToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // return <Navigate to="/" replace />
    return <Outlet />;

};

export default RequireAuth;

// import React, { useEffect, useState } from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import useUserTypeCheck from '../../Hooks/useUserCheck';

// const RequireAuth = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [error, setError] = useState(null);
//     const location = useLocation();
//     const storedToken = localStorage.getItem('AdminToken');
//     const [userTypeCheck, isLoadingCheck, errorCheck] = useUserTypeCheck();


//     useEffect(() => {
//         const checkAuthentication = async () => {
//             try {
//                 // Check if the token exists and user type is valid
//                 if (storedToken && userTypeCheck !== undefined) {
//                     setIsAuthenticated(true);
//                 } else {
//                     setIsAuthenticated(false);
//                 }
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         checkAuthentication();
//     }, [storedToken, userTypeCheck]);

//     if (isLoading || isLoadingCheck) {
//         return <div>Loading...</div>;
//     }

//     if (error || errorCheck) {
//         console.error('Error:', error);
//         return <div>An error occurred. Please try again later.</div>;
//     }

//     if (!isAuthenticated) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return <Outlet />;
// };

// export default RequireAuth;
