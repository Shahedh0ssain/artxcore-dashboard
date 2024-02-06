import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import fetcher from '../Components/authentation/Fetcher';

const Users = () => {


    const token = localStorage.getItem('AdminToken');
    let url = 'http://95.111.233.59:5000/all_users/'

    const { data: users, isLoading, error } = useSWR(url, () => fetcher(url, token));



    if (isLoading) {
        console.log('loading')
        // return <Loading></Loading>
    }

    if (error) {
        console.log("error", error);
    }


    const [dloading, setDloading] = useState(false);
    const [loading, setloading] = useState(false);
    // const [users, setUsers] = useState([]);

    const itemsPerPage = 5; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users?.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    // if(!users){
    //     console.log("user...")
    // }

    // paginations end

    // useEffect(() => {

    //     setloading(true);

    //     const apiUrl = 'http://95.111.233.59:5000/all_users/';
    //     fetch(apiUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Token ${token}`,
    //         },
    //     }).then(response => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //         .then(data => {
    //             setUsers(data);
    //             // console.log('Data sent successfully:', data);
    //             setloading(false);
    //         })

    //     setloading(false);
    // }, [users, token])



    const deleteItem = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            setDloading(true);

            fetch(`http://95.111.233.59:5000/user_delete/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            })
                .then(res => {
                    if (res.status === 200) {
                        toast.success('User deleted successfully');
                        mutate(url);
                        // Use the callback of mutate to get the latest data
                        // mutate([url], async newData => {
                        //     // Log data before mutate
                        //     console.log('Data before mutate:', newData);

                        //     // Optionally, you can fetch the updated data from the server
                        //     const updatedData = await fetcher(url, token);

                        //     // Log data after mutate
                        //     console.log('Data after mutate:', updatedData);

                        //     return updatedData; // Return the updated data to mutate
                        // }, false);

                        setDloading(false);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    toast.error('Error deleting user');
                    console.error(error);
                    setDloading(false);
                });
        }
    };


    // const deleteItem = id => {

    //     const proceed = window.confirm('Are you sure ?');

    //     if (proceed) {

    //         setDloading(true);
    //         fetch(`http://95.111.233.59:5000/user_delete/${id}/`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Token ${token}`,
    //             },

    //         })
    //             .then(res => {

    //                 if (res.status === 200) {
    //                     toast.success("User delete successfully");
    //                     setDloading(false);

    //                     // Log data before mutate
    //                     console.log('Data before mutate:', users);

    //                     // Mutate with the correct URL
    //                     mutate([url]);

    //                     // Log data after mutate
    //                     console.log('Data after mutate:', users);


    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //             })

    //         setDloading(false)
    //     }


    // };





    if (dloading || loading || isLoading) {
        console.log("deleteo.....");
        return <Loading></Loading>
    }
    if (error) {
        toast.error(error?.message);
    }
    // console.log("All user", users)


    return (
        <div className=' h-screen bg-base-100'>

            <div className='m-2 '>
                <div className="overflow-x-auto">
                    <table disabled="disabled" className="table w-full ">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Username</th>
                                <th>email</th>
                                <th>User Type</th>
                                <th>User role</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users &&
                                currentItems.map((user, index) => <tr>

                                    <th>{index + 1}</th>

                                    <td>{user?.username}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.user_type}</td>

                                    <td>
                                        <Link to={`profile/${user?.id}`} className='btn btn-outline btn-primary m-2'>View</Link>
                                        <Link to={`profileUpdate/${user?.id}`} className='btn btn-outline btn-primary m-2'>Edit</Link>
                                        <Link ><button onClick={() => deleteItem(user?.id)} className='btn btn-outline btn-error m-2'>
                                            {dloading === true ?
                                                <span class="loading loading-dots loading-md"></span>

                                                :
                                                <span>Delete</span>

                                            }

                                        </button></Link>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>


                <div className='flex justify-center'>
                    <div className='py-3 isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"'>
                        {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, index) => (
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

            {dloading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <span className="loading loading-lg text-white"></span>
                </div>
            )}

        </div >
    );
};

export default Users;