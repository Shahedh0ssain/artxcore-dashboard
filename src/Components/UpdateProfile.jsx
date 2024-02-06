import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import { useState } from 'react';
import useUserTypeSuper from '../Hooks/useSuperUserType';
import Loading from './Loading';
import toast from 'react-hot-toast';



const UpdateProfile = () => {


    let { userId } = useParams();
    const [users, isLoading, error,] = useUsers(userId);
    const [uloading, setuLoading] = useState(false);
    const [userTypeSuper, isLoadingtype, errortype,] = useUserTypeSuper();
    // const token = localStorage.getItem('AdminToken');
    const token = 'a07890319c66ca1f9195f224b3cc307565fa2441';

    let navigate = useNavigate();
    let from = "/users";

    const { register, control, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log("dataa ", data)
        setuLoading(true)
        fetch(`http://95.111.233.59:5000/user_edit/${userId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                res.json();
                if (res.status === 200) {
                    toast.success("User update successfully.")
                    setuLoading(false);
                    navigate(from, { replace: true });
                }
                if (res.status !== 200) {
                    toast.error("Something is rong.")
                    setuLoading(false);
                }

            })
            .then(data => {

            });

        reset();
        setuLoading(false);
        navigate(from, { replace: true });
    };

    useEffect(() => {
        reset({
            username: users?.data?.username || '',
            email: users?.data?.email || '',
        });
    }, [users])



    if (error || errortype) {
        console.log(error)
    }
    if (isLoading || uloading || isLoadingtype) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-slate-50 h-screen'>
            <div className='flex tems-center '>
                <div className='mx-auto  p-5 '>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <form className='' onSubmit={handleSubmit(onSubmit)}>

                                <h1 className='text-center text-xl'>Profile Update</h1>


                                {/* Email */}

                                <div className='form-control w-full max-w-xs'>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue={users?.data?.email}
                                        rules={{ required: 'This field is required' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <input
                                                    className='input input-bordered w-full max-w-xs'
                                                    {...field} />
                                                {fieldState.error && <span>{fieldState.error.message}</span>}
                                            </>
                                        )}
                                    />

                                </div>

                                <div className='form-control w-full max-w-xs'>
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=''
                                        rules={{ required: 'This field is required' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <input
                                                    className='input input-bordered w-full max-w-xs'
                                                    {...field} />
                                                {fieldState.error && <span>{fieldState.error.message}</span>}
                                            </>
                                        )}
                                    />


                                </div>

                                <div className="form-control py-5">
                                    <label className="form-control w-full max-w-xs">

                                        <select  {...register("user_type")} className="select select-bordered">

                                            {userTypeSuper?.data?.user_types?.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))}
                                        </select>

                                    </label>
                                </div>



                                <p className='w-full overflow-hidden text-red-500' >
                                    {/* {errorMessage} */}
                                </p>

                                <p className="py-2">Already Update <Link className='link link-error' to='/allmanu'>Go</Link></p>
                                {/* <input type="submit" /> */}
                                <div className="card-actions justify-center ">
                                    <input className="btn btn-primary w-full" type="submit" value="Update" />
                                    {/* <button className="btn btn-primary w-full" >Registration</button> */}
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateProfile;