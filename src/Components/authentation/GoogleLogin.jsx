import React from 'react';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';


const GoogleLogin = () => {
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [] = useToken(user);

    if(user){
        navigate(from, { replace: true });
    }
    if(loading){
        console.log('loading');
    }
    if(error){
        console.log(error);
    }

    return (
        <div className='w-full'>
           
            <button
                onClick={()=>signInWithGoogle()}
                className="btn btn-outline w-full"
            >Continue with Google</button>
        </div>
    );
};

export default GoogleLogin;