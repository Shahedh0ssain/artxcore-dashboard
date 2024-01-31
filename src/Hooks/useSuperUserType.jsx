
import axios from "axios";
import useSWR from "swr";


//use Admin hook
const useUserTypeSuper = () => {

    // console.log(type)
    const token = localStorage.getItem('AdminToken');
    // const token = 'a07890319c66ca1f9195f224b3cc307565fa2441';

    // if (!token) {
    //     return ;
    // }

    const api = axios.create({
        baseURL: 'http://95.111.233.59:5000',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const { isLoading, error, data: userTypeSuper } = useSWR('usertypesuper', async () => {
        return await api.get(`/user_type_supreme/`)
    })

    // console.log(userType);

    return [userTypeSuper, isLoading, error,];
}

export default useUserTypeSuper;