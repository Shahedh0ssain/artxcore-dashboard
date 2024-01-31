
import axios from "axios";
import useSWR from "swr";


const useContent = id => {
   

    const token = localStorage.getItem('AdminToken');


    const api = axios.create({
        baseURL: 'http://95.111.233.59:5000',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
    });


    const { isLoading, error, data: content } = useSWR('content', async () => {

        return await api.get(`/edit/${id}/`)
    

    })

    return [content, isLoading, error,];
}

export default useContent;