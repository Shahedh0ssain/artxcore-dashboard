import { useEffect, useState } from "react";

//useTOken hook:

const useToken = () => {


    const [token, setToken] = useState('');


    useEffect(() => {
        const storedToken = localStorage.getItem('AdminToken');

        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return token;


}

export default useToken;