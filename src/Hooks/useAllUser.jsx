
import axios from "axios";

import useSWR from "swr";


//use Admin hook
const useAllUser = () => {

    const token = localStorage.getItem('AdminToken');


    const api = axios.create({
        baseURL: 'http://95.111.233.59:5000',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
    });


    const { isLoading, error, data: users } = useSWR('Alluser', async () => {

        return await api.get(`/all_users/`)

    })

    return [users, isLoading, error,];
}

export default useAllUser;