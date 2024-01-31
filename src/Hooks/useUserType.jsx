
import useSWR from "swr";


//use Admin hook
const useUserType = () => {

    // console.log(type)

    const { isLoading, error, data: userType } = useSWR('usertype', () =>
        fetch(`http://95.111.233.59:5000/user_type/`).then(res =>
            res.json()
        ))

    // console.log(userType);

    return [userType, isLoading, error,];
}

export default useUserType;