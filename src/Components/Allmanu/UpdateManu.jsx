import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../authentation/Fetcher';
import Loading from '../Loading';
import useManuItems from '../../Hooks/useManuItems';
import toast from 'react-hot-toast';



const UpdateManu = () => {

    let { manuId } = useParams();
    // console.log(manuId);

    const token = localStorage.getItem('AdminToken');

    let url = `http://95.111.233.59:5000/menu/edit/${manuId}/`

    const { data: viewManu, isLoading, error } = useSWR(url, () => fetcher(url, token));
    const [ManuItems, isLoadingManu, errorManu] = useManuItems()
    const [loading, setuLoading] = useState(false)

    if (isLoading || isLoadingManu) {
        console.log("loading")

    }

    if (error || errorManu) {
        console.log("first", error)
    }


    // console.log("viewManu : ", viewManu?.menu)


    const { register, control, reset, handleSubmit } = useForm();

    const onSubmit = data => {


        const { menu_description, menu_link, menu_meta_title, menu_name, image, menu_title, parent_menu, sequence } = data
        const img = data.image[0]

        // console.log("dataa ", data)

        data = {
            "menu_name": menu_name,
            "parent_menu": parent_menu,
            "menu_link": menu_link,
            "menu_title": menu_title,
            "menu_meta_title": menu_meta_title,
            "menu_description": menu_description,
            "sequence": sequence,
            "image": img
        }

        setuLoading(true)
        fetch(url, {
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
                    toast.success("Manu update successfully.")
                    setuLoading(false);
                    // navigate(from, { replace: true });
                }
                if (res.status !== 200) {
                    toast.error("Something was wrong.")
                    setuLoading(false);
                }

            })
            .then(data => {

            });

        reset();
        setuLoading(false);
        navigate(from, { replace: true });
    };

    // useEffect(() => {
    //     reset({
    //         // username: users?.data?.username || '',
    //         // email: users?.data?.email || '',
    //     });
    // }, [users])



    return (
        <div className="bg-slate-50 h-full">
            <div className=' flex justify-center	items-center'>
                <div className=" mt-5 card w-6/12 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {
                            viewManu ?
                                <form className='' onSubmit={handleSubmit(onSubmit)} >

                                    <h1 className='text-center text-xl py-3'>Update Manu</h1>

                                    {/* manu name */}
                                    <div className='form-control w-full '>
                                        <label className="label ms-2">
                                            <span className="label-text">Manu Name</span>
                                        </label>


                                        <Controller
                                            name="Manu Name"
                                            control={control}
                                            defaultValue={viewManu?.menu?.menu_name}
                                            render={({ field, fieldState }) => (
                                                <>
                                                    <input
                                                        className='input input-bordered w-full '
                                                        {...field} />
                                                    {fieldState.error && <span>{fieldState.error.message}</span>}
                                                </>
                                            )}
                                        />

                                    </div>


                                    <div className="form-control w-full  flex flex-row my-2">


                                        {/* parent manu */}
                                        <div className='w-11/12 me-1'>
                                            <label className="label ms-2">
                                                <span className="label-text">Parent Manu</span>
                                            </label>

                                            <select {...register('menu_name')} className="select select-bordered w-full">

                                                {ManuItems ? (
                                                    ManuItems.map((menuItem) => (
                                                        <option key={menuItem.id} value={menuItem.menu_name || 'No manu name aviable'}>
                                                            {menuItem.menu_name}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option>No User Found</option>
                                                )}

                                            </select>
                                            {/* <Controller
                                                name="Parent Manu"
                                                control={control}
                                                defaultValue={viewManu?.menu?.parent_menu}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full '
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            /> */}
                                        </div>

                                        {/* Manu Links */}
                                        <div className='w-11/12 ms-1'>
                                            <label className="label ms-2">
                                                <span className="label-text">Manu Links</span>
                                            </label>
                                            <Controller
                                                name="Manu Links"
                                                control={control}
                                                defaultValue={viewManu?.menu?.menu_link || 'No Link aviable'}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full '
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            />
                                        </div>

                                    </div>


                                    <div className="form-control w-full  flex flex-row my-2">
                                        {/* menu meta title */}
                                        <div className='w-11/12 me-1'>
                                            <label className="label ms-2">
                                                <span className="label-text">menu_meta_title</span>
                                            </label>
                                            <Controller
                                                name="menu_meta_title"
                                                control={control}
                                                defaultValue={viewManu?.menu?.menu_meta_title || 'No title aviable'}

                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full '
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/*Menu description */}
                                        <div className='w-11/12 ms-1'>
                                            <label className="label ms-2">
                                                <span className="label-text">Menu description</span>
                                            </label>
                                            <Controller
                                                name="Menu description"
                                                control={control}
                                                defaultValue={viewManu?.menu?.menu_description || 'No title description'}

                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <input
                                                            className='input input-bordered w-full '
                                                            {...field} />
                                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                                    </>
                                                )}
                                            />
                                        </div>


                                    </div>

                                    {/* image? */}

                                    <div>
                                        <input {...register("image")} type="file" className=" mt-2  file-input file-input-bordered file-input-primary w-full " />
                                    </div>

                                    {/* end */}



                                    <p className="ms-2 py-2"> <Link className='link link-error' to='/allmanu'> Already Update Go</Link></p>

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

    );
};

export default UpdateManu;