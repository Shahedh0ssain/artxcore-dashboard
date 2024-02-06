import useSWR from "swr";
import fetcher from "../Components/authentation/Fetcher";

const useManuItems = () => {

    const token = localStorage.getItem('AdminToken');

    const { data: ManuItems, isLoadingManu, errorManu } = useSWR(`http://95.111.233.59:5000/menu/list/all_temp/`, () =>
        fetcher(`http://95.111.233.59:5000/menu/list/all_temp/`, token));


    return [ManuItems, isLoadingManu, errorManu];

}

export default useManuItems;