


import { useForm } from "react-hook-form";
import useUserType from "../../Hooks/useUserType";
import Loading from "../Loading";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


export default function CreateUser() {



    const [usersType, isLoading, error,] = useUserType();
    const [loading2, setLoading2] = useState(false)


    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async data => {

        console.log(data)

        // if (!token) {
        //     toast.success("Token Unvalid");
        //     return
        // }

        setLoading2(true);

        fetch(`http://95.111.233.59:5000/create_user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                res.json();
                if (res.status === 201) {
                    toast.success('User Created Successfully');
                    setLoading2(false);
                }

            })
            .then(data => {
                setLoading2(false);
                console.log("create normal user data", data);
                // if (data.message) {
                //     toast.success(data.message)
                // }

            })
        setLoading2(false);
        reset();

    };

    if (isLoading || loading2) {
        return <Loading></Loading>
    }
    if (error) {
        console.log("error")
    }



    return (
        <div className='flex justify-center	items-center'>
            <div className="mt-5 card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <h1 className='text-center text-xl'>No_Admin User Registration</h1>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("username", { required: "username is required" })}
                                aria-invalid={errors.Name ? "true" : "false"}
                            />

                            {/* {errors.Name?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>} */}
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("email", { required: "Email Address is required" })}
                                aria-invalid={errors.Email ? "true" : "false"}
                            />

                            {/* {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>} */}
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("password", { required: "Password Address is required" })}
                                aria-invalid={errors.Password ? "true" : "false"}
                            />
                            {/* {errors.Password && <p role="alert" className='text-red-500'>{errors.Password?.message}</p>} */}
                        </div>
                        <p className='w-full overflow-hidden text-red-500' >
                            {/* {errorMessage} */}
                        </p>

                        <div className="form-control py-5">
                            <label className="form-control w-full max-w-xs">

                                <select  {...register("user_type")} className="select select-bordered">

                                    {usersType?.user_types?.map((option, index) => (
                                        <option key={index}>{option}</option>
                                    ))}

                                </select>

                            </label>
                        </div>
                        {/* en?d */}

                        <p className="py-3">Please login again <Link className='link link-error' to='/login'>now</Link></p>
                        {/* <input type="submit" /> */}
                        <div className="card-actions justify-center ">
                            <input className="btn btn-primary w-full" type="submit" value="Registration" />
                            {/* <button className="btn btn-primary w-full" >Registration</button> */}
                        </div>

                    </form>
                    {/* <div className="divider">OR</div> */}
                    <div className="grid  rounded-box place-items-center">
                        {/* <GoogleLogin></GoogleLogin> */}
                    </div>
                </div>
            </div>
        </div>
    )
}