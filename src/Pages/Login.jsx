import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';



const Login = () => {


    const token = localStorage.getItem('AdminToken');
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    let from = "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { mutate } = useSWRConfig();



    if (token) {
        console.log(true);
        // navigate(from, { replace: true });
    }

    if (loading) {
        console.log('looooodlog')
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        setLoading(true)

        if (data) {

            fetch(`http://95.111.233.59:5000/login/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    console.log(res)
                    if (res.status !== 200) {
                        toast.success("No user found");
                        // console.log("some this incorrect")
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('login data', data)
                    if (data?.token) {
                        localStorage.setItem('AdminToken', data?.token);
                        mutate(['http://95.111.233.59:5000/return_user_detail/', data?.token]);
                        navigate(from, { replace: true })
                    }
                    setLoading(false)
                }).catch(error => {
                    console.error("Error during login:", error);
                    setLoading(false);
                });
            setLoading(false)
        }


    };



    // if(error){
    //     toast(error.message);
    // }



    return (
        <div className='flex justify-center  p-5 md:p-10'>
            <div class="  card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <h1 className='text-center text-xl'>LogIn</h1>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("username", { required: "Email Address is required" })}
                                aria-invalid={errors.Email ? "true" : "false"}
                            />

                            {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>}
                        </div>


                        <div className='form-control w-full max-w-xs pb-5'>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("password", { required: "Password Address is required" })}
                                aria-invalid={errors.Password ? "true" : "false"}
                            />
                            {errors.Password && <p role="alert" className='text-red-500'>{errors.Password?.message}</p>}
                        </div>
                        <p className='w-full overflow-hidden text-red-500' >
                            {/* {errorMessage} */}
                        </p>
                        <div className='flex py-2 pb-2'>
                            <p className="">Verify email <Link className='link link-error' to='/verifyemail'><span className='px-1'>here</span></Link></p>


                            <p className="">Create new user <Link className='link link-error' to='/createuser'>now</Link></p>

                        </div>
                        <div className="card-actions justify-center ">
                            <input className="btn btn-primary w-full" type="submit" value="Login" />
                            {/* <button className="btn btn-primary w-full" >Registration</button> */}
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;