
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import toast from 'react-hot-toast';
import useContent from '../Hooks/useContent';


const MyContent = () => {

    let { contentId } = useParams();


    const [content, isLoading, error,] = useContent(contentId);

    if (content) {
        console.log("MyProfile", content)
    }
    if (error) {
        toast.error(error?.message);
        console.log("Error : ", error?.message)
    }
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='bg-slate-50 h-screen'>
            <div className=" mt-5 card w-96 bg-base-100 shadow-xl mx-auto">
                {/* <div className="card-body">
                    <h2 className="card-title"> Name : {users?.data?.username}</h2>
                    <p className='font-medium'>Email : {users?.data?.email}</p>
                    <p><span className='font-medium'>Creator :{users?.data?.creator || " no creator"}</span></p>
                    <p><span className='font-medium'>User type  : {users?.data?.user_type}</span></p>
                    <div className="card-actions">
                        <Link className='link link-error' to='/users'>Back to list</Link>
                    </div>
                </div> */}

            </div>
        </div>

    );
};

export default MyContent;