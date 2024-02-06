
import axios from "axios";
import useSWR from "swr";
import fetcher from "../Components/authentation/Fetcher";


const useContent = id => {


    const token = localStorage.getItem('AdminToken');



    const { isLoading, error, data: content } = useSWR(`http://95.111.233.59:5000/content/edit/${id}/`, () =>
        fetcher(`http://95.111.233.59:5000/content/edit/${id}/`, token));


    return [content, isLoading, error,];

}

export default useContent;