


import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import useContentType from "../../Hooks/useContentType";
import Loading from "../Loading";


export default function ContentCreate() {


    const [contentType, isLoading, error,] = useContentType();
    const [loading2, setLoading2] = useState(false);

    const token = localStorage.getItem('AdminToken');


    const { register, handleSubmit, reset } = useForm();



    const onSubmit = async (data) => {


        console.log("data", data);
        const { content_type, title_type, content, image } = data;

        const img = data.image[0];
        console.log("image data : ", img)
        // Shahedh00ssain

        // const formData = new FormData();
        // formData.append("content_type", content_type);
        // formData.append("title_type", title_type);
        // formData.append("image", img); // Append the file
        // formData.append("content", JSON.stringify(content)); // Since content seems to be an object, stringify it

        const senddata = {
            "content_type": content_type,
            "title_type": title_type,
            "image": img,
            "content": content
        }

        fetch(`http://95.111.233.59:5000/content/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },

            body: JSON.stringify(senddata)
        })
            .then(res => {
                console.log("backend responsibe", res);
                if (res.status !== 201) {
                    toast.error("Failed to create the resource. ");
                }
                return res.json();
            })
            .then(data => {
                console.log('data', data);
                if (data.message) {
                    setLoading2(false);
                    toast.success(data.message);
                    // navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading2(false);
                toast.error('An error occurred.');
            });


        // reset();




    };



    if (isLoading || loading2) {
        console.log("isLoading loading2")
        return <Loading></Loading>
    }

    if (error) {
        console.log("error");
    }


    return (


        <div className="bg-slate-50 overflow-x-auto">
            <div className=' flex justify-center	items-center'>
                <div className=" mt-5 card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form encType="multipart/form-data" className='' onSubmit={handleSubmit(onSubmit)} >

                            <h1 className='text-center text-xl'>Create Content</h1>

                            {/* content_type */}
                            <div className="form-control py-5">
                                <label className="form-control w-full max-w-xs">

                                    <select {...register('content_type', { required: true })} className="select select-bordered">

                                        {contentType ?


                                            contentType?.data?.content_options?.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))

                                            :
                                            <option>No User Found</option>

                                        }

                                    </select>

                                </label>
                            </div>

                            {/* title_type */}

                            <div className="form-control pb-5">
                                <label className="form-control w-full max-w-xs">

                                    <select {...register('title_type', { required: true })} className="select select-bordered">


                                        {contentType ?


                                            contentType?.data?.title_options?.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))

                                            :
                                            <option>No User Found</option>

                                        }

                                    </select>

                                </label>
                            </div>
                            {/* en?d */}


                            {/* image? */}
                            <input {...register("image", { required: true })} type="file" className="mb-5 file-input file-input-bordered file-input-primary w-full max-w-xs" />
                            {/* end */}

                            {/* content option */}


                            <label className="form-control w-full max-w-xs">
                                <p className="p-2">Content option</p>

                                <input {...register("content.title")} type="text" placeholder="Title here" className="mb-5 input input-bordered w-full max-w-xs" />
                                <input {...register("content.metatitle")} type="text" placeholder="Meta Title" className="mb-5 input input-bordered w-full max-w-xs" />
                                <textarea {...register("content.description")} className="w-full mb-5 textarea textarea-bordered" placeholder="description"></textarea>

                            </label>

                            <div className="card-actions justify-center ">
                                <input className="btn btn-primary w-full" type="submit" value="Create" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}