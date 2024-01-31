
import { useNavigate } from "react-router-dom";


const Navber = () => {

    // const [userType] = useUserTypeCheck();
    // const [toggle, setToggle] = useState(false);

    let navigate = useNavigate();
    let from = "/";
    const token = localStorage.getItem('AdminToken');

    // console.log("Navber", token)

    const navLink = [


        token ?
            <>


                <div className="dropdown dropdown-end">

                    {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"> */}
                    <li className="list-none  font-medium text-md px-4 "><button className="flex items-center btn btn-outline btn-error" onClick={() => {
                        const proceed = window.confirm('Are you sure ?');

                        if (proceed) {
                            localStorage.removeItem('AdminToken');
                            navigate(from, { replace: true });
                        }
                    }}>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>

                        <span className="p-2">Logout</span>
                    </button></li>

                </div>


            </>
            :
            <>
                <div className="dropdown dropdown-end">

                    {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"> */}
                    <li className="list-none  font-medium text-md px-4 "><button className="flex items-center btn btn-outline btn-error" onClick={() => {
                        const proceed = window.confirm('Are you sure ?');

                        if (proceed) {
                            localStorage.removeItem('AdminToken');
                            navigate(from, { replace: true });
                        }
                    }}>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>

                        <span className="p-2">Logout</span>
                    </button></li>

                </div>
            </>
    ]
    return (


        <div className="navbar bg-white sticky top-0 z-40 ">
            <div className="flex-1">
                <a className=" text-xl">MY deshboard</a>
            </div>
            <div className="flex-none">

                {navLink}

            </div>
        </div>
        // <div className=" drawer drawer-end ">

        //     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content flex flex-col">
        //         {/* <!-- Navbar --> */}
        //         <div className="w-full navbar bg-white">
        //             <div className="flex-1 px-2 mx-2 font-bold">
        //                 <h1>Artxcore</h1>
        //             </div>

        //             <div className="flex-none lg:hidden">
        //                 {
        //                     toggle && <label for="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden">Dashboard</label>
        //                 }
        //                 <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
        //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        //                 </label>

        //             </div>
        //             <div className="flex-none hidden lg:block">
        //                 <ul className="menu menu-horizontal items-center   ">

        //                     {navLink}

        //                 </ul>
        //             </div>
        //         </div>


        //     </div>
        /* <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">

                {navLink}

            </ul>

        </div> */

        /* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */

        // </div >
    );
};

export default Navber;