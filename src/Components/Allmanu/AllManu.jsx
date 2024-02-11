import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';

import fetcher from '../../Components/authentation/Fetcher';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import toast from 'react-hot-toast';
import useUserTypeCheck from '../../Hooks/useUserCheck';
import usePagination from '../../Hooks/usePagination';

const AllManu = () => {


    const token = localStorage.getItem('AdminToken');
    let url = 'http://95.111.233.59:5000/menu/list/all/'
    const { data: Manudata, isLoading, error } = useSWR(url, () => fetcher(url));
    const [dloading, setDloading] = useState(false);

    const [userTypeCheck, isLoadingC, errorC] = useUserTypeCheck();
    const user_type = userTypeCheck?.user_type;

    // console.log("user_type", user_type)

    if (isLoading || isLoadingC || dloading) {
        return <Loading></Loading>
    }
    if (error || errorC) {
        console.log("All manuData error")
    }

    // pagination
    const itemsPerPage = 5;
    const { currentPage, paginate, getPaginationIndices } = usePagination(itemsPerPage);

    const { currentItems } = getPaginationIndices(Manudata);




    const deleteItem = id => {

        const proceed = window.confirm('Are you sure?');

        console.log("delete", id);

        if (proceed) {
            setDloading(true);

            fetch(`http://95.111.233.59:5000/menu/delete/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            })
                .then(res => {
                    if (res.status === 200) {
                        toast.success('Manu deleted successfully');
                        mutate(url);
                        setDloading(false);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                })

            setDloading(false);
        }
    };


    const deleteItemContentWriter = id => {

        const proceed = window.confirm('Are you sure ?');
        console.log("deleteItemContentWriter", id)

        if (proceed) {

            setDloading(true);
            fetch(`http://95.111.233.59:5000/menu/delete_temp/${id}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },

            })
                .then(res => {

                    console.log(res)
                    if (res.status === 200) {
                        toast.success("delete sucessfully by content writer");
                        setDloading(false);
                        mutate('http://95.111.233.59:5000/menu/list/all_temp/');
                    }
                    return res.json()
                })
                .then(data => {
                    console.log("deleted data", data)
                })

            setDloading(false)
        }





    };




    return (
        <div className=' h-screen bg-base-100 overflow-x-auto'>

            <div className='m-2 '>
                <div className="overflow-x-auto">
                    <table disabled="disabled" className="table w-full ">

                        <thead>
                            <tr>
                                <th>Id</th>

                                <th>menu name</th>
                                <th>edit</th>
                                <th>update</th>
                                <th>Content delete</th>

                            </tr>
                        </thead>
                        <tbody className=''>

                            {Manudata &&
                                currentItems.map((manu, index) => <tr key={index} >

                                    <th >{index + 1}</th>

                                    <td>{manu?.menu_name}</td>
                                    <td>
                                        <Link to={`/allmanu/viewmanu/${manu?.id}`} className='btn btn-outline btn-primary m-2'>View</Link>

                                    </td>
                                    <td>
                                        <Link to={`/allmanu/updatemanu/${manu?.id}`} className='btn btn-outline btn-primary m-2'>Edit</Link>

                                    </td>

                                    <td>
                                        {user_type &&
                                            user_type === "content_writer" ?
                                            <Link ><button onClick={() => deleteItemContentWriter(manu?.id)} className='btn btn-outline btn-error m-2'>
                                                {dloading === true ?
                                                    <span className="loading loading-dots loading-md"></span>

                                                    :
                                                    <span>Delete</span>

                                                }

                                            </button></Link>
                                            :
                                            <Link ><button onClick={() => deleteItem(manu?.id)} className='btn btn-outline btn-error m-2'>
                                                {dloading === true ?
                                                    <span className="loading loading-dots loading-md"></span>

                                                    :
                                                    <span>Delete</span>

                                                }
                                                {/* Delete */}
                                            </button></Link>
                                        }

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>

                    <div className='flex justify-center bg-slate-50'>
                        <div className='py-3 isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"'>
                            {Array.from({ length: Math.ceil(Manudata?.length / itemsPerPage) }, (_, index) => (
                                <button
                                    key={index}
                                    className={`${index + 1 === currentPage && "bg-[#65C3C8] text-white"} relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                                    type="radio"
                                    name="options"
                                    aria-label={index + 1}
                                    // checked={index + 1 === currentPage}
                                    onClick={() => paginate(index + 1)}
                                >{index + 1}</button>
                            ))}
                        </div>
                    </div>
                </div>




            </div>



        </div >
    );
};

export default AllManu;