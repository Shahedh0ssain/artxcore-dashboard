


import { useForm } from "react-hook-form";
import Loading from "../Loading";
import { useState } from "react";
import toast from "react-hot-toast";


export default function CreateAdminUser() {



    // const [userTypeSuper, isLoading, error,] = useUserTypeSuper();

    const [loading2, setLoading2] = useState(false)
    const token = localStorage.getItem('AdminToken');

    if (loading2) {
        console.log('admin loooogin')
        return <Loading></Loading>
    }

    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async data => {


        setLoading2(true);

        fetch(`http://95.111.233.59:5000/create_not_admin_user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log("create admin user  res: ", res)
                return res.json();
            })
            .then(data => {
                // setLoading2(false)
                console.log("create admin user data", data);
                if (data.message) {
                    toast.success(data.message)
                }

            })
        setLoading2(false);
        reset();

    };


    // if (error) {
    //     console.log("error")
    // }



    return (
        <div className="bg-slate-50 h-screen">
            <div className=' flex justify-center	items-center'>
                <div className="mt-5 card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form className='' onSubmit={handleSubmit(onSubmit)}>

                            <h1 className='text-center text-xl'>Create User_admin Registration</h1>
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

                            <div className='form-control w-full max-w-xs pb-5'>
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
        </div>
    )
}