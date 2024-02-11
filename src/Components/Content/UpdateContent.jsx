import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import useContent from '../../Hooks/useContent';
import Loading from '../Loading';
// import ControllerDemo from '../Reuseable/ControllerDemo';
import useContentType from '../../Hooks/useContentType';



const UpdateContent = () => {


    let { contentId } = useParams();
    const token = localStorage.getItem('AdminToken');

    const [contentType, isLoadingType, errorType,] = useContentType();
    const [content, isLoading, error,] = useContent(contentId);
    const [loading, setuLoading] = useState(false)

    if (content) {
        // console.log("Update_content", content)
    }
    if (error || errorType) {
        // toast.error(error?.message);
        console.log("Error found in update page  ")
    }
    if (isLoading || loading) {
        // return <Loading></Loading>
        console.log('loading')
    }


    // let navigate = useNavigate();
    // let from = "/users";

    const { register, control, reset, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log("dataa ", data);

        const { content_type, title_type, content, image } = data;
        const senddata = {
            "content_type": content_type,
            "title_type": title_type,
            "image": img,
            "content": content
        }

        setuLoading(true)
        fetch(`http://95.111.233.59:5000/update/${contentId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(senddata)
        })
            .then(res => {
                console.log("update data ", res)
                if (res.status === 200) {
                    toast.success("User update successfully.")
                    setuLoading(false);
                    // navigate(from, { replace: true });
                }
                if (res.status !== 200) {
                    toast.error("Something was wrong.")
                    setuLoading(false);
                }
                return res.json();

            })
            .then(data => {
                console.log("update dataaaa  ", data)
            });

        reset();
        setuLoading(false);
        navigate(from, { replace: true });
    };





    return (
        <div className=' h-screen bg-slate-50 overflow-x-auto'>
            <div className='flex tems-center '>
                <div className='mx-auto  p-5 '>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">

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


                                    {/* image? */}
                                    <input {...register("image", { required: true })} type="file" className="my-4 file-input file-input-bordered file-input-primary w-full max-w-xs" />
                                    {/* end */}

                                    <label className="form-control w-full max-w-xs ">
                                        <p className="p-2">Content option</p>
                                        {/* content title */}
                                        <label className=" ">
                                            {/* <p className="p-2">Content option</p> */}
                                            <Controller
                                                name="content.title"
                                                control={control}
                                                defaultValue={content?.content?.title}
                                                rules={{ required: 'This field is required' }}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full max-w-xs mb-5'
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            />
                                        </label>

                                        {/* <input {...register("content.title")} type="text" placeholder="Title here" className="mb-5 input input-bordered w-full max-w-xs" /> */}

                                        {/* content metatitle */}
                                        <label className=" ">
                                            {/* <p className="p-2">Content option</p> */}
                                            <Controller
                                                name="content.metatitle"
                                                control={control}
                                                defaultValue={content?.content?.metatitle}
                                                rules={{ required: 'This field is required' }}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full max-w-xs mb-5'
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            />
                                        </label>


                                        {/* <input {...register("content.metatitle")} type="text" placeholder="Meta Title" className="mb-5 input input-bordered w-full max-w-xs" /> */}
                                        {/* content description */}
                                        <label className=" ">
                                            {/* <p className="p-2">Content option</p> */}
                                            <Controller
                                                name="content.description   "
                                                control={control}
                                                defaultValue={content?.content?.description}
                                                rules={{ required: 'This field is required' }}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full max-w-xs mb-5'
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            />
                                        </label>
                                        {/* <textarea {...register("content.description")} className="w-full mb-5 textarea textarea-bordered" placeholder="description"></textarea> */}

                                    </label>


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