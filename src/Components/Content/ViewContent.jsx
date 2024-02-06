
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import Loading from './Loading';
import toast from 'react-hot-toast';
import useContent from '../../Hooks/useContent';
import Loading from '../Loading';


const ViewContent = () => {

    let { contentId } = useParams();


    const [content, isLoading, error,] = useContent(contentId);

    if (content) {
        console.log("content", content)
    }
    if (error) {
        toast.error(error?.message);
        console.log("Error : ", error?.message)
    }
    if (isLoading) {
        // return <Loading></Loading>
    }


    return (

        <>

            <div className='bg-slate-50 h-screen'>
                <div className=" mt-5 card w-6/12 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        {content ?

                            <>
                                <h2 className="card-title"> Author : {content?.author}</h2>
                                <h2 className="card-title"> Content type : {content?.content_typ}</h2>
                                <h2 className="card-title"> Title type : {content?.content_type || 'no creator'}</h2>
                                {/* <h2 className="card-title"> Content type : {content?.created_at}</h2> */}
                                <p><span className='font-medium'>Creator at  :{content?.created_at || " no creator"}</span></p>

                                {/* <p className='font-medium'>Email : {users?.data?.email}</p>
                            <p><span className='font-medium'>Creator :{users?.data?.creator || " no creator"}</span></p>
                            <p><span className='font-medium'>User type  : {users?.data?.user_type}</span></p> */}
                                <div className="card-actions">
                                    <Link className='link link-error' to='/allcontent'>Back to list</Link>
                                </div>
                            </>

                            :
                            <Loading></Loading>
                        }
                    </div>

                </div>
            </div>

        </>

    );
};

export default ViewContent;