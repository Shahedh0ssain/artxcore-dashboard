
// import { useNavigate } from "react-router-dom";


// const Navber = () => {


//     let navigate = useNavigate();
//     let from = "/";
//     const token = localStorage.getItem('AdminToken');


//     const navLink = [


//         token ?
//             <>


//                 <div className="dropdown dropdown-end">

//                     {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"> */}
//                     <li className="list-none  font-medium text-md px-4 "><button className="flex items-center btn btn-outline btn-error" onClick={() => {
//                         const proceed = window.confirm('Are you sure ?');

//                         if (proceed) {
//                             localStorage.removeItem('AdminToken');
//                             navigate(from, { replace: true });
//                         }
//                     }}>
//                         <div className="">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                             </svg>
//                         </div>

//                         <span className="p-2">Logout</span>
//                     </button></li>

//                 </div>


//             </>
//             :
//             <>
//                 <div className="dropdown dropdown-end">

//                     {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"> */}
//                     <li className="list-none  font-medium text-md px-4 "><button className="flex items-center btn btn-outline btn-error" onClick={() => {
//                         const proceed = window.confirm('Are you sure ?');

//                         if (proceed) {
//                             localStorage.removeItem('AdminToken');
//                             navigate(from, { replace: true });
//                         }
//                     }}>
//                         <div className="">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                             </svg>
//                         </div>

//                         <span className="p-2">Logout</span>
//                     </button></li>

//                 </div>
//             </>
//     ]
//     return (


//         <div className="navbar bg-white sticky top-0 z-40 ">
//             <div className="flex-1">
//                 <a className=" text-xl">MY deshboard</a>
//             </div>
//             <div className="flex-none">

//                 {navLink}

//             </div>
//         </div>

//     );
// };

// export default Navber;


import { useNavigate } from "react-router-dom";

const Navber = () => {
    const navigate = useNavigate();
    const from = "/";
    const token = localStorage.getItem('AdminToken');

    const handleLogout = () => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            localStorage.removeItem('AdminToken');
            navigate(from, { replace: true });
        }
    };

    const authenticatedLinks = (
        <div className="dropdown dropdown-end" key="authenticated-links">
            <li className="list-none font-medium text-md px-4">
                <button className="flex items-center btn btn-outline btn-error" onClick={handleLogout}>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </div>
                    <span className="p-2">Logout</span>
                </button>
            </li>
        </div>
    );

    const unauthenticatedLinks = (
        <div className="dropdown dropdown-end" key="unauthenticated-links">
            <li className="list-none font-medium text-md px-4">
                <button className="flex items-center btn btn-outline btn-error" onClick={handleLogout}>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </div>
                    <span className="p-2">Logout</span>
                </button>
            </li>
        </div>
    );

    return (
        <div className="navbar bg-white sticky top-0 z-40">
            <div className="flex-1">
                <a className="text-xl">MY dashboard</a>
            </div>
            <div className="flex-none">
                {token ? authenticatedLinks : unauthenticatedLinks}
            </div>
        </div>
    );
};

export default Navber;
