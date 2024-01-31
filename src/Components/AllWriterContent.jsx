import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import toast from 'react-hot-toast';
import useSWR from 'swr';

import fetcher from '../Components/authentation/Fetcher';

const AllWriterContent = () => {


    const token = localStorage.getItem('AdminToken');

    const { data: lists, isLoading, error } = useSWR('http://95.111.233.59:5000/content/list_temp/all/', () => fetcher('http://95.111.233.59:5000/content/list_temp/all/', token));


    if (lists) {
        console.log("all lists :", lists)
    }



    const [dloading, setDloading] = useState(false);


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

                    console.log(res)
                    if (res.status === 200) {
                        toast.success("delete sucessfully by content writer");
                        setDloading(false);
                        mutate(['http://95.111.233.59:5000/content/list_temp/all/']);
                    }
                    return res.json()
                })
                .then(data => {
                    console.log("deleted data",data)
                })

            setDloading(false)
        }





    };





    if (dloading || isLoading) {
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

                        <thead className='bg-base-100'>
                            <tr>
                                <th>No</th>
                                <th>content_type</th>
                                <th>title_type</th>
                                {/* <th>content</th> */}
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>

                            {lists &&
                                currentItems.map((list, index) => <tr>

                                    <th>{index + 1}</th>

                                    <td>{list?.content_type}</td>
                                    <td>{list?.title_type}</td>
                                    {/* <td>{list?.content.title}</td> */}

                                    <td>


                                        {lists &&


                                            <>
                                                <Link to={`content/${list?.id}`} className='btn btn-outline btn-primary m-2'>View</Link>
                                                <Link to={`updatecontent/${list?.id}`} className='btn btn-outline btn-primary m-2'>Edit</Link>
                                                <button onClick={() => deleteItemContentWriter(list?.id)} className='btn btn-outline btn-error m-2'>
                                                    {dloading === true ?
                                                        <span class="loading loading-dots loading-md"></span>

                                                        :
                                                        <span>Delete</span>

                                                    }

                                                </button></>

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

export default AllWriterContent;