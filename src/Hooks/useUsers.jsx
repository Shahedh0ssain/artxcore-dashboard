
import axios from "axios";
import useSWR from "swr";


//use Admin hook
const useUsers = id => {
    //    console.log(email)

    const token = localStorage.getItem('AdminToken');

  
    const api = axios.create({
        baseURL: 'http://95.111.233.59:5000',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
    });


    const { isLoading, error, data: users } = useSWR('Alluser', async () => {

        return await api.get(`/user_detail/${id}/`)
        // .then(res => res.json());

    })

    return [users, isLoading, error,];
}

export default useUsers;