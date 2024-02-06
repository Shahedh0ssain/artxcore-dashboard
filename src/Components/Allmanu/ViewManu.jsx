import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../authentation/Fetcher";
import Loading from "../Loading";

const ViewManu = () => {


    let { manuId } = useParams();
    const token = localStorage.getItem('AdminToken');

    let url = `http://95.111.233.59:5000/menu/edit/${manuId}/`
    const { data: viewManu, isLoading, error } = useSWR(url, () => fetcher(url, token));

    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        console.log("first", error)
    }

    return (
        <div className='bg-slate-50 h-screen'>
            <div className=" mt-5 card w-6/12 bg-base-100 shadow-xl mx-auto">

                <div className="card-body">
                    <h1 className="card-title  justify-center my-2">Manu all Information</h1>
                    <h2 className="card-title"> Id : {viewManu?.menu?.id}</h2>
                    <h2 className="card-title"> Manu Name : {viewManu?.menu?.menu_name}</h2>
                    <h2 className="card-title"> Parent Manu : {viewManu?.menu?.parent_menu || 'No parent manu'}</h2>
                    <h2 className="card-title"> Manu Links : {viewManu?.menu?.menu_link || 'No nav link '}</h2>

                    <h2 className="card-title"> Sequence : {viewManu?.menu?.sequence || 'No sequence '}</h2>
                    {/* <p className='font-medium'>Email : {users?.data?.email}</p>
                    <p><span className='font-medium'>Creator :{users?.data?.creator || " no creator"}</span></p>
                    <p><span className='font-medium'>User type  : {users?.data?.user_type}</span></p>
                    <div className="card-actions">
                        <Link className='link link-error' to='/users'>Back to list</Link>
                    </div> */}
                    <div className="card-actions">
                        <Link className='link link-error' to='/allmanu'>Back to list</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ViewManu