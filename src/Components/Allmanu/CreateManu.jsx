


import { useForm } from "react-hook-form";
import { useState } from "react";
import useContentType from "../../Hooks/useContentType";
// import Loading from "../Loading";
import useSWR from "swr";
import fetcher from "../authentation/Fetcher";
import useManuItems from "../../Hooks/useManuItems";
import toast from "react-hot-toast";


const CreateManu = () => {


    const [contentType, isLoading, error,] = useContentType();
    const [loading2, setLoading2] = useState(false);




    const [ManuItems, isLoadingManu, errorManu] = useManuItems()
    const token = localStorage.getItem('AdminToken');
    const { register, handleSubmit } = useForm();


    if (isLoadingManu || loading2) {
        console.log('loading')
    }
    if (errorManu || error) {
        console.log(errorManu)
    }



    const onSubmit = async data => {

        console.log("Create manu data :", data)

        const { menu_description, menu_link, menu_meta_title, menu_name, image, menu_title, parent_menu, sequence } = data

        const img = data.image[0]
        console.log("image", img)

        fetch(`http://95.111.233.59:5000/content/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(
                {
                    "menu_name": menu_name,
                    "parent_menu": parent_menu,
                    "menu_link": menu_link,
                    "menu_title": menu_title,
                    "menu_meta_title": menu_meta_title,
                    "menu_description": menu_description,
                    "sequence": sequence,
                    "image": img

                }
            )
        })
            .then(res => {
                console.log(res)
                if (res.status !== 200) {
                    toast.error("This didn't work.");
                }
                return res.json();
            })
            .then(data => {
                console.log('daaaata', data)
                if (data.message) {
                    setLoading2(false);
                    toast.success(data.message);
                    // navigate(from, { replace: true });
                }


            })


        setLoading2(false);

        // reset();




    };



    return (


        <div className="bg-slate-50 h-full">
            <div className=' flex justify-center	items-center'>
                <div className=" mt-5 card w-6/12 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form className='' onSubmit={handleSubmit(onSubmit)} >

                            <h1 className='text-center text-xl py-3'>Create Manu</h1>
                            <div className="form-control ">

                                <input {...register("menu_name")} type="text" placeholder="menu_name" className="mb-3 me-2 input input-bordered w-full " />
                            </div>

                            <label className="form-control w-full  flex flex-row my-2">
                                <div className="w-full me-1">
                                    <select {...register('parent_menu')} placeholder="parent_menu" className="select select-bordered w-full">

                                        {ManuItems ? (
                                            ManuItems.map((menuItem) => (
                                                <option key={menuItem.id} value={menuItem.id}>
                                                    {menuItem.menu_name}
                                                </option>
                                            ))
                                        ) : (
                                            <option>No User Found</option>
                                        )}

                                    </select>
                                </div>

                                {/* sequence here */}
                                <input {...register("sequence")} type="Number" placeholder="sequence here" className="ms-1 mb-3 input input-bordered w-full " />

                            </label>
                            <label className="form-control w-full  flex flex-row my-2">

                                <input {...register("menu_link", { required: true })} type="text" placeholder=" menu_link here" className="mb-3 me-2 input input-bordered w-full max-w-xs" />
                                <input {...register("menu_title")} type="text" placeholder="menu_title here" className="mb-3 input input-bordered w-full max-w-xs" />

                            </label>



                            <label className="form-control w-full  flex flex-row my-2">

                                <input {...register("menu_meta_title")} type="text" placeholder="menu_meta_title here" className="mb-3 me-2 input input-bordered w-full max-w-xs" />
                                <input {...register("menu_description", { required: true })} type="text" placeholder="menu_description" className="mb-3 input input-bordered w-full max-w-xs" />

                            </label>
                            {/* 
                            <label className="form-control w-full max-w-xs">

                                <input {...register("content.title")} type="text" placeholder="Title here" className="mb-5 input input-bordered w-full max-w-xs" />
                                <input {...register("content.metatitle")} type="text" placeholder="Meta Title" className="mb-5 input input-bordered w-full max-w-xs" />
                                <textarea {...register("content.description")} className="w-full mb-5 textarea textarea-bordered" placeholder="description"></textarea>

                            </label> */}

                            {/* image? */}
                            <input {...register("image", { required: true })} type="file" className="mb-5   file-input file-input-bordered file-input-primary w-full " />
                            {/* end */}

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

export default CreateManu;