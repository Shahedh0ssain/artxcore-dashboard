import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import useContent from '../../Hooks/useContent';
import Loading from '../Loading';
import ControllerDemo from '../Reuseable/ControllerDemo';
import useContentType from '../../Hooks/useContentType';



const UpdateContent = () => {


    let { contentId } = useParams();

    const [contentType, isLoadingType, errorType,] = useContentType();

    const [content, isLoading, error,] = useContent(contentId);

    if (content) {
        // console.log("content", content)
    }
    if (error) {
        toast.error(error?.message);
        console.log("Error : ", error?.message)
    }
    if (isLoading) {
        // return <Loading></Loading>
    }


    // let navigate = useNavigate();
    // let from = "/users";

    const { register, control, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log("dataa ", data)
        // setuLoading(true)
        // fetch(`http://95.111.233.59:5000/user_edit/${userId}/`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Token ${token}`,
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => {
        //         res.json();
        //         if (res.status === 200) {
        //             toast.success("User update successfully.")
        //             setuLoading(false);
        //             navigate(from, { replace: true });
        //         }
        //         if (res.status !== 200) {
        //             toast.error("Something is rong.")
        //             setuLoading(false);
        //         }

        //     })
        //     .then(data => {

        //     });

        // reset();
        // setuLoading(false);
        // navigate(from, { replace: true });
    };

    // useEffect(() => {
    //     reset({
    //         username: users?.data?.username || '',
    //         email: users?.data?.email || '',
    //     });
    // }, [users])





    return (
        <div className='bg-slate-50 h-screen'>
            <div className='flex tems-center '>
                <div className='mx-auto  p-5 '>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">

                            {content ?
                                <form className='' onSubmit={handleSubmit(onSubmit)}>

                                    <h1 className='text-center text-xl'>Content Update</h1>

                                    {/* Author */}
                                    <div className='form-control w-full max-w-xs'>
                                        <label className="label ms-2">
                                            <span className="label-text">Author</span>
                                        </label>
                                        <Controller
                                            name="username"
                                            control={control}
                                            defaultValue={content?.author}
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

                                    {/* content_type */}
                                    {/* <ControllerDemo name='Content type' lable='Content type' defaultValue={content?.content_type}></ControllerDemo> */}

                                    <div className='form-control w-full max-w-xs'>
                                        <label className="label">
                                            <span className="label-text">Content type</span>
                                        </label>
                                        <select {...register('content_type', { required: true })} className="select select-bordered">

                                            {contentType ?


                                                contentType?.data?.content_options?.map((option, index) => (
                                                    <option key={index}>{option}</option>
                                                ))

                                                :
                                                <option>No User Found</option>

                                            }

                                        </select>
                                        {/* <Controller
                                            name="email"
                                            control={control}
                                            defaultValue={content?.content_type}
                                            rules={{ required: 'This field is required' }}
                                            render={({ field, fieldState }) => (
                                                <>
                                                    <input
                                                        className='input input-bordered w-full max-w-xs'
                                                        {...field} />
                                                    {fieldState.error && <span>{fieldState.error.message}</span>}
                                                </>
                                            )}
                                        /> */}

                                    </div>

                                    {/* title_type */}
                                    <div className='form-control w-full max-w-xs'>
                                        <label className="label ms-2">
                                            <span className="label-text">Title Type</span>
                                        </label>
                                        <select {...register('title_type', { required: true })} className="select select-bordered">


                                            {contentType ?


                                                contentType?.data?.title_options?.map((option, index) => (
                                                    <option key={index}>{option}</option>
                                                ))

                                                :
                                                <option>No User Found</option>

                                            }

                                        </select>

                                        {/* <Controller
                                            name="password"
                                            control={control}
                                            defaultValue={content?.title_type}
                                            rules={{ required: 'This field is required' }}
                                            render={({ field, fieldState }) => (
                                                <>
                                                    <input
                                                        className='input input-bordered w-full max-w-xs'
                                                        {...field} />
                                                    {fieldState.error && <span>{fieldState.error.message}</span>}
                                                </>
                                            )}
                                        /> */}


                                    </div>




                                    <label className="form-control w-full max-w-xs">
                                        <p className="p-2">Content option</p>

                                        <input {...register("content.title")} type="text" placeholder="Title here" className="mb-5 input input-bordered w-full max-w-xs" />
                                        <input {...register("content.metatitle")} type="text" placeholder="Meta Title" className="mb-5 input input-bordered w-full max-w-xs" />
                                        <textarea {...register("content.description")} className="w-full mb-5 textarea textarea-bordered" placeholder="description"></textarea>

                                    </label>

                                    {/* {errorMessage} */}
                                    {/* <p className='w-full overflow-hidden text-red-500' >
                                    
                                    </p> */}

                                    <p className="py-1 ps-2">Already Update <Link className='link link-error' to='/allcontent'>Go</Link></p>
                                    {/* <input type="submit" /> */}
                                    <div className="card-actions justify-center ">
                                        <input className="btn btn-primary w-full" type="submit" value="Update" />
                                    </div>

                                </form>
                                :
                                <Loading></Loading>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateContent;