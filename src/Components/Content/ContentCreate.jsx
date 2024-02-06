


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

    // console.log("contentType", contentType?.data)

    // const [formData, setFormData] = useState({
    //     content_type: '',
    //     title_type: '',
    //     image: null,
    //     content: {
    //         title: '',
    //         metatitle: '',
    //         description: '',
    //     },
    // });

    const onSubmit = async (data) => {

        const { content_type, title_type, content, image } = data;

        const img = data.image[0]

        // JSON data
        const jsonData = {

            "content_type": content_type,
            "title_type": title_type,

            "content": content

        };

        // Create a FormData object for handling files
        const formData = new FormData();
        formData.append('image', img);
        formData.append('json', JSON.stringify(jsonData));

        // Create a FormData object for handling files
        // const formData = new FormData();
        // formData.append('content_type', data.content_type);
        // formData.append('title_type', data.title_type);
        // formData.append('content', data.content);
        // formData.append('image', data.image);

        // const img = data.image[0]




        fetch(`http://95.111.233.59:5000/content/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: formData
            // body: JSON.stringify(
            //     {
            //         "content_type": content_type,
            //         "title_type": title_type,
            //         "image": img,
            //         "content": content
            //     }
            // )
        })
            .then(res => {
                console.log("backend responsibe", res);
                if (res.status !== 200) {
                    toast.error("This didn't work.");
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


        <div className="bg-slate-50 snap-y">
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