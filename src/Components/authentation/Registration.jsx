// import React from 'react';
// import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';
// import useToken from '../../Hooks/useToken';
// import GoogleLogin from './GoogleLogin';
// // import GoogleLogIn from './GoogleLogin';




// const Registration = () => {

//     const [] = useToken(user);
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);
//     const [updateProfile, Pupdating, Perror] = useUpdateProfile(auth);


//     const { register, formState: { errors }, handleSubmit } = useForm();

//     const onSubmit = async data => {
//         // console.log(data.Name);
//         await createUserWithEmailAndPassword(data.Email, data.Password);
//         await updateProfile({ displayName: data.Name });
//         // await updateProfile({ displayName: data.firstName });
//         // console.log('successs', data.Name);
//     };

//     let location = useLocation();
//     let navigate = useNavigate();
//     let from = location.state?.from?.pathname || "/";




//     // const navigate = useNavigate();
//     if (user) {
//         navigate(from, { replace: true });
//     }

//     if (error) {
//         toast.error(error.message);
//     }

//     if (loading) {
//         return <p>Loading...</p>
//     }



//     return (
//         <div className=''>
//             <div class="card w-96 bg-base-100 shadow-xl">
//                 <div class="card-body">
//                     <form className='' onSubmit={handleSubmit(onSubmit)}>

//                         <h1 className='text-center text-xl'>Registration</h1>
//                         <div className='form-control w-full max-w-xs'>
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>

//                             <input
//                                 className='input input-bordered w-full max-w-xs'
//                                 {...register("Name", { required: "Name is required" })}
//                                 aria-invalid={errors.Name ? "true" : "false"}
//                             />

//                             {errors.Name?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>}
//                         </div>
//                         <div className='form-control w-full max-w-xs'>
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>

//                             <input
//                                 className='input input-bordered w-full max-w-xs'
//                                 {...register("Email", { required: "Email Address is required" })}
//                                 aria-invalid={errors.Email ? "true" : "false"}
//                             />

//                             {errors.Email?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>}
//                         </div>

//                         <div className='form-control w-full max-w-xs'>
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>

//                             <input
//                                 className='input input-bordered w-full max-w-xs'
//                                 {...register("Password", { required: "Password Address is required" })}
//                                 aria-invalid={errors.Password ? "true" : "false"}
//                             />
//                             {errors.Password && <p role="alert" className='text-red-500'>{errors.Password?.message}</p>}
//                         </div>
//                         <p className='w-full overflow-hidden text-red-500' >
//                             {/* {errorMessage} */}
//                         </p>
//                         {/* logIn and regi toggle */}
//                         {/* <a class="link link-error">I'm a simple link</a> */}
//                         {/* ratio button */}
//                         <div className="form-control">
//                             <label className="label cursor-pointer">
//                                 <span className="label-text">Sellar</span>
//                                 <input type="checkbox" checked className="checkbox" />
//                             </label>
//                         </div>
//                         {/* en?d */}
//                         <p className="py-2">Please Login <Link className='link link-error' to='/login'>now</Link></p>
//                         {/* <input type="submit" /> */}
//                         <div className="card-actions justify-center ">
//                             <input className="btn btn-primary w-full" type="submit" value="Login" />
//                             {/* <button className="btn btn-primary w-full" >Registration</button> */}
//                         </div>

//                     </form>
//                     <div className="divider">OR</div>
//                     <div className="grid  rounded-box place-items-center">
//                         <GoogleLogin></GoogleLogin>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Registration;