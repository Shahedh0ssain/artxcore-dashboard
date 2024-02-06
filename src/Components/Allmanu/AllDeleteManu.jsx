import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';

import fetcher from '../../Components/authentation/Fetcher';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import toast from 'react-hot-toast';

const AllDeleteManu = () => {


    const token = localStorage.getItem('AdminToken');
    let url = 'http://95.111.233.59:5000/menu/list/all_temp/'
    const { data: Manudata, isLoading, error } = useSWR(url, () => fetcher(url));
    const [dloading, setDloading] = useState(false);


    if (isLoading || dloading) {
        return <Loading></Loading>
    }
    if (dloading) {
        console.log('setDloading...')
        // return <Loading></Loading>
    }
    if (error) {
        console.log("error", error)
    }



    const deleteItem = id => {

        const proceed = window.confirm('Are you sure?');


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






    return (
        <div className=' h-screen bg-base-100'>

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
                                Manudata.map((manu, index) => <tr className=''>

                                    <th>{index + 1}</th>

                                    <td>{manu?.menu_name}</td>
                                    <td>
                                        <Link to={`/allmanu/viewmanu/${manu?.id}`} className='btn btn-outline btn-primary m-2'>View</Link>

                                    </td>
                                    <td>
                                        <Link to={`/allmanu/updatemanu/${manu?.id}`} className='btn btn-outline btn-primary m-2'>Update</Link>

                                    </td>

                                    <td>
                                        <Link ><button onClick={() => deleteItem(manu?.id)} className='btn btn-outline btn-error m-2'>
                                            {dloading === true ?
                                                <span class="loading loading-dots loading-md"></span>

                                                :
                                                <span>Delete</span>

                                            }
                                            {/* Delete */}
                                        </button></Link>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>




            </div>



        </div >
    );
};

export default AllDeleteManu;