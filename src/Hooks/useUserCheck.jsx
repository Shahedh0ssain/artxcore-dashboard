
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";


//use Admin hook
const useUserTypeCheck = () => {

    // console.log(type)
    const token = localStorage.getItem('AdminToken');
    // const [userTypeCheck, setuserTypeCheck] = useState();
    // const [isLoading, setloading] = useState(false);
    // const [error, setError] = useState();

    // useEffect(() => {

    //     setloading(true);

    //     const apiUrl = 'http://95.111.233.59:5000/return_user_detail/';
    //     fetch(apiUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Token ${token}`,
    //         },
    //     }).then(response => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //         .then(data => {
    //             setuserTypeCheck(data);
    //             console.log('Data sent successfully:', data);
    //             // setloading(false);
    //         }).catch(error => {
    //             console.error("Error usercheck:", error);
    //             setError(error)

    //         });

    //     setloading(false);
    // }, [token])

    // const api = axios.create({
    //     baseURL: 'http://95.111.233.59:5000',
    //     headers: {
    //         'Authorization': `Token ${token}`,
    //         'Content-Type': 'application/json',
    //     },
    // });

    const fetcher = async (url, token) => {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            }
        });
        const data = await res.json();
        return data;
    };

    const { data: userTypeCheck, isLoading, error } = useSWR('http://95.111.233.59:5000/return_user_detail/', () => fetcher('http://95.111.233.59:5000/return_user_detail/', token));


    // console.log("userTypeCheck", userTypeCheck)


    // {
    //     refreshInterval: 10,
    // }
    // const fetcher = (...args) => fetch(...args).then(res => res.json())


    // const { isLoading, error, data: userTypeCheck } = useSWR(async () => {

    //     return await api.get(`/return_user_detail/`)

    // })




    return [userTypeCheck, isLoading, error,];
}

export default useUserTypeCheck;