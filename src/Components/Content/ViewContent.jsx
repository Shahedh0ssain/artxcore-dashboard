
import React from 'react';
import { Link, unstable_HistoryRouter, useLocation, useParams } from 'react-router-dom';
// import Loading from './Loading';
import toast from 'react-hot-toast';
import useContent from '../../Hooks/useContent';
import Loading from '../Loading';


const ViewContent = () => {

    let { contentId } = useParams();


    const [content, isLoading, error,] = useContent(contentId);

    if (isLoading) {
        return <Loading></Loading>
    }


    if (!content) {
        console.log("content", content);
        return <div>Content not found </div>
    }

    if (error) {
        toast.error(error?.message);
        console.log("Error : ", error?.message)
    }

    const handleBackButtonClick = () => {
        window.history.back();
    };


    return (

        <>

            <div className='bg-slate-50 h-screen'>
                <div className=" mt-5 card w-6/12 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body py-14">
                        {content ?

                            <>
                                <h2 className="card-title"> Author : {content?.author}</h2>
                                <h2 className="card-title"> Content type : {content?.content_type}</h2>
                                <h2 className="card-title"> Title type : {content?.title_type || 'no creator'}</h2>
                                <h2 className="card-title"> Content Title  : {content?.content?.title || 'no title'}</h2>
                                <h2 className="card-title"> Content Metatitle  : {content?.content?.metatitle || 'no metatitle'}</h2>
                                <h2 className="card-title"> Content Description  : {content?.content?.description || 'no description'}</h2>
                                <p><span className='font-medium'>Creator at  :{content?.created_at || " no creator"}</span></p>
                                <div className="card-actions">
                                    <button onClick={handleBackButtonClick}>Back to list</button>
                                    {/* <Link className='link link-error' to='/allcontent'>Back to list</Link> */}
                                </div>
                            </>

                            :
                            <div>
                                No data found
                            </div>

                        }
                    </div>

                </div>
            </div>

        </>

    );
};

export default ViewContent;