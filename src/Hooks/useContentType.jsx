
import axios from "axios";
import useSWR from "swr";


//use Admin hook
const useContentType = () => {

    const token = localStorage.getItem('AdminToken');


    const api = axios.create({
        baseURL: 'http://95.111.233.59:5000',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const { isLoading, error, data: contentType } = useSWR('contentType', async () => {
        return await api.get(`/content/options/`)
    })
    // console.log(userType);

    return [contentType, isLoading, error,];
}

export default useContentType;