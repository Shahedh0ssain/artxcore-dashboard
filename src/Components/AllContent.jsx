import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';

import useUserTypeCheck from '../Hooks/useUserCheck';
import fetcher from '../Components/authentation/Fetcher';

const AllContent = () => {


    const token = localStorage.getItem('AdminToken');
    const [userTypeCheck, isLoadingC, errorC] = useUserTypeCheck();
    const user_type = userTypeCheck?.data?.user_type;



    const { data: lists, isLoading, error } = useSWR('http://95.111.233.59:5000/content/list/all/', () => fetcher('http://95.111.233.59:5000/content/list/all/', token));




    if (lists) {
        console.log("all lists :", lists)
    }





    // const token = 'a07890319c66ca1f9195f224b3cc307565fa2441';
    const [dloading, setDloading] = useState(false);
    // const [loading, setloading] = useState(false);
    // const [users, setUsers] = useState([]);

    const itemsPerPage = 5; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = lists?.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };




    const deleteItem = id => {

        const proceed = window.confirm('Are you sure ?');
        console.log(id)

        if (proceed) {

            setDloading(true);
            fetch(`http://95.111.233.59:5000/content/delete/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },

            })
                .then(res => {
                    res.json()
                    console.log(res)
                    if (res.status === 200) {
                        mutate(['http://95.111.233.59:5000/content/list/all/']);
                        toast.success("content delete sucessfully");
                        setDloading(false);
                    }
                })
                .then(data => { })

            setDloading(false)
        }





    };


    const deleteItemContentWriter = id => {

        const proceed = window.confirm('Are you sure ?');
        console.log(id)

        if (proceed) {

            setDloading(true);
            fetch(`http://95.111.233.59:5000/content/delete_temp/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },

            })
                .then(res => {
                    res.json()
                    console.log(res)
                    if (res.status === 200) {
                        mutate(['http://95.111.233.59:5000/all_users/']);
                        toast.success("delete sucessfully by content writer");
                        setDloading(false);
                    }
                })
                .then(data => { })

            setDloading(false)
        }





    };





    if (dloading || isLoading || isLoadingC) {
        console.log("looo.....");
        return <Loading></Loading>
    }

    if (error) {
        console.log("error", error);
        toast.error(error?.message);

    }


    return (
        <div className=' h-screen'>

            <div className=''>
                <div className="overflow-x-auto">
                    <table disabled="disabled" className="table w-full ">

                        <thead >
                            <tr className='p-2'>
                                <th>No</th>
                                <th>content_type</th>
                                <th>title_type</th>
                                <th>content title</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>

                            {lists &&
                                currentItems.map((list, index) => <tr>

                                    <th>{index + 1}</th>

                                    <td>{list?.content_type}</td>
                                    <td>{list?.title_type}</td>
                                    <td>{list?.content.title}</td>

                                    <td>

                                        {userTypeCheck &&

                                            <>
                                                <Link to={`content/${list?.id}`} className='btn btn-outline btn-primary m-2'>View</Link>
                                                <Link to={`updatecontent/${list?.id}`} className='btn btn-outline btn-primary m-2'>Edit</Link>
                                                <Link>
                                                    <button onClick={() => deleteItem(list?.id)} className='btn btn-outline btn-error m-2'>
                                                        {dloading === true ?
                                                            <span class="loading loading-dots loading-md"></span>

                                                            :
                                                            <span>Delete</span>

                                                        }

                                                    </button>
                                                </Link>
                                            </>

                                        }



                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


                <div className='flex justify-center bg-slate-50'>
                    <div className='py-3 isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"'>
                        {Array.from({ length: Math.ceil(lists?.data?.length / itemsPerPage) }, (_, index) => (
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

        </div >
    );
};

export default AllContent;