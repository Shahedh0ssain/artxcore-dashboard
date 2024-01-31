// import { useEffect, useState } from "react";

// //use Admin hook
// const useAdmin = user => {



//     const [admin, setAdmin] = useState(false);
//     const [adminLoading, setAdminLoading] = useState(true);

//     // if (!email) {
//     //     console.log(user?.email, "error");
//     // }

//     // const { isLoading, error, data } = useQuery('admin', () =>
//     //     fetch(`https://ass-backend-12-copy.up.railway.app/admin/${email}`)
//     //         .then(res => res.json()
//     //             .then(data => setAdmin(data?.admin))
//     //         ))

//     // console.log(admin);




//     useEffect(() => {
//         const email = user?.email;
//         if (email) {
//             fetch(`https://ass-backend-12-copy.up.railway.app/admin/${email}`)
//                 .then(res => res.json())
//                 .then(data => setAdmin(data?.admin))
//         }
//         setAdminLoading(false);
//     }, [])



//     // return [data, admin, isLoading, error];
//     return [admin];
// }

// export default useAdmin;