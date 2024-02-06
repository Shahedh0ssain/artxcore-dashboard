


import { useForm } from "react-hook-form";
import useUserTypeSuper from "../../Hooks/useSuperUserType";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";


const CreateSuperUser = () => {


    const [userTypeSuper, isLoading, error,] = useUserTypeSuper();
    const [loading2, setLoading2] = useState(false);

    let navigate = useNavigate();
    let from = "/users";
    const token = localStorage.getItem('AdminToken');

    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async (data) => {

        console.log(data)
        setLoading2(true);

        // Additional code...

        fetch(`http://95.111.233.59:5000/create_user_supreme/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log("res", res)
                return res.json()
            })
            .then((data) => {
                setLoading2(false);
                if (data.message) {
                    toast.success(data.message);
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                setLoading2(false);
                console.error("Error:", error);
                toast.error("An error occurred. Please try again.");
            });
        setLoading2(false);

        reset();
    };



    if (isLoading) {
        console.log("isLoading")
        return <Loading></Loading>
    }
    if (loading2) {
        console.log("loading2")
        return <Loading></Loading>
    }
    if (error) {
        console.log("error");
    }


    return (


        <div className="bg-slate-50 h-screen">
            {/* {loading2 && isLoading && <Loading />} */}
            <div className=' flex justify-center	items-center'>
                <div className=" mt-5 card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form className='' onSubmit={handleSubmit(onSubmit)}>

                            <h1 className='text-center text-xl'>User Registration</h1>
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
                            {/* logIn and regi toggle */}
                            {/* <a className="link link-error">I'm a simple link</a> */}
                            {/* ratio button */}
                            <div className="form-control py-5">
                                <label className="form-control w-full max-w-xs">

                                    <select  {...register("user_type")} className="select select-bordered">



                                        {userTypeSuper ?


                                            userTypeSuper?.data?.user_types?.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))

                                            :
                                            <option>No User Found</option>

                                        }

                                    </select>

                                </label>
                            </div>
                            {/* en?d */}

                            <div className="card-actions justify-center ">
                                <input className="btn btn-primary w-full" type="submit" value="Registration" />
                            </div>

                        </form>
                        {/* <div className="divider">OR</div> */}
                        <div className="grid  rounded-box place-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateSuperUser