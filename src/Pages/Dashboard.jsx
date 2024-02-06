// import React from 'react';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import Navber from '../Components/Navber';
// import useUserCheck from '../Hooks/useUserCheck';
// import Loading from '../Components/Loading';
// import SubNavLinks from '../Components/Reuseable/SubNavLinks';
// import CustomNavItem from '../Components/Reuseable/SubNavLinks';

// const Dashboard = () => {


//     const [userTypeCheck, isLoading, error] = useUserCheck();

//     let navigationLinks;
//     let admin = userTypeCheck?.user_type?.slice(-6);



//     // console.log(" user Type", userTypeCheck?.user_type);



//     if (isLoading) {
//         return <Loading></Loading>
//     }

//     // Check for errors
//     if (error) {
//         return <p>Error loading data: {error.message}</p>;
//     }


//     if (userTypeCheck?.user_type !== undefined) {
//         if (userTypeCheck?.user_type === "supreme_admin") {
//             navigationLinks = [


//                 <NavLink to='/'>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                     Home
//                 </NavLink>
//                 // <SubNavLinks to='/'>Home</SubNavLinks>
//                 ,
//                 <details close>

//                     <summary>
//                         My Users
//                     </summary>

//                     {/* <li className='p-2'><NavLink to='/users'>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
//                         </svg>

//                         All Users
//                     </NavLink>
//                     </li> */}

//                     <CustomNavItem to='/users' icon={
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
//                         </svg>
//                     } label=" All Users" />
//                     <CustomNavItem to='/createsuperuser' icon={
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
//                         </svg>
//                     } label="Create Super Use" />


//                 </details>,

//                 <details close>

//                     <summary>
//                         content option
//                     </summary>
//                     <CustomNavItem to='/contentcreate' icon={
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                         </svg>
//                     } label="content create" />
//                     <CustomNavItem to='/allcontent' icon={
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                         </svg>
//                     } label="all content" />


//                 </details>,
//                 <details close>

//                     <summary>
//                         Manu
//                     </summary>

//                     <CustomNavItem to='/createManu' icon={
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                         </svg>
//                     } label="Create manu" />
//                     <CustomNavItem to='/allmanu' icon={
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                         </svg>
//                     } label="All manu" />



//                 </details>,


//             ]
//         } else if (admin === '_admin' && userTypeCheck !== "supreme_admin") {



//             {
//                 if (userTypeCheck?.user_type === "content_writer_admin") {
//                     navigationLinks = [


//                         <NavLink to='/'>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                             Home
//                         </NavLink>,
//                         <NavLink to='/createadminuser'>Ceate user</NavLink>
//                         ,

//                         <details close>

//                             <summary>
//                                 content option
//                             </summary>

//                             <CustomNavItem to='/contentcreate' icon={
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                                 </svg>
//                             } label="content create" />
//                             <CustomNavItem to='/allcontent' icon={
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//                                 </svg>
//                             } label="all content" />


//                         </details>


//                     ]

//                 } else {
//                     navigationLinks = [

//                         <NavLink to='/'>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                             Home
//                         </NavLink>,
//                         <NavLink to='/createadminuser'>Ceate user</NavLink>
//                     ]
//                 }
//             }
//         } else {
//             if (userTypeCheck?.user_type === "content_writer") {
//                 navigationLinks = [
//                     <NavLink to='/'>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                         Home
//                     </NavLink>,

// <details close>

//     <summary>
//         content option
//     </summary>

//     <summary>
//         content option
//     </summary>
//     <CustomNavItem to='/contentcreate' icon={
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//         </svg>
//     } label="content create" />
//     <CustomNavItem to='/allwritercontent' icon={
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
//         </svg>
//     } label="all content" />




// </details>
//                 ]
//             } else {
//                 navigationLinks = [
//                     <NavLink to='/'>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                         Home
//                     </NavLink>,

//                     <li className='p-2 px-2'>No admin found</li>
//                 ]
//             }
//         }
//     } else {
//         navigationLinks = [
//             <NavLink to='/'>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                 Home
//             </NavLink>,


//             <Link className='link link-error' to='/verifyemail'>Please verify email</Link>

//         ]
//     }

//     // userTypeCheck?.user_type === "content_writer"
//     // const createNavigationLinks = (links) => {
//     //     return links.map((link, index) => (
//     //         <NavigationItem key={index} to={link.to} icon={link.icon} label={link.label} />
//     //     ));
//     // };
//     // const userNavigationConfig = admin === '_admin' && userRole !== "supreme_admin" ? navigationConfig['content_writer_admin'] : navigationConfig[userRole] || [];


//     return (
//         <div className=''>
//             <div className=" drawer drawer-mobile ">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 <div className=" h-screen bg-base-100 drawer-content flex flex-col ">
//                     {/* <!-- Page ?content here --> */}
//                     <Navber></Navber>
//                     <Outlet />
//                     {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
//                 </div>
//                 <div className=" w-72  h-full bg-white">
//                     {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
//                     <ul className="menu pt-5 p-2 w-72 bg-white ">
//                         <div className='px-5 py-2 font-medium text-lg flex flex-row items-center'>
//                             <img className='w-[30px] ' src=' artxcore1.png'></img>
//                             <p className='px-2'>Aerxcore</p>
//                         </div>

//                         {/* {createNavigationLinks(navigationLinks)} */}
//                         {navigationLinks.map((link, index) => (
//                             <li className='p-2' key={index}>{link}</li>
//                         ))}

//                     </ul>



//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Dashboard;



import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import useUserCheck from '../Hooks/useUserCheck';
import Loading from '../Components/Loading';

const Dashboard = () => {

    const [userTypeCheck, isLoading, error] = useUserCheck();
    let navigationLinks;
    let admin = userTypeCheck?.user_type?.slice(-6);

    // console.log("user Roll", userTypeCheck)

    if (userTypeCheck?.user_type !== undefined) {
        if (userTypeCheck?.user_type === "supreme_admin") {
            navigationLinks = [
                { to: '/', label: 'Home' },
                {
                    label: 'User Management',
                    dropdownOptions: [
                        { to: '/users', label: 'All Users' },
                        { to: '/createsuperuser', label: 'Create Super User' },

                    ],
                },
                {
                    label: 'Content Management',
                    dropdownOptions: [
                        { to: '/contentcreate ', label: 'Create Content' },
                        { to: '/allcontent', label: 'All Content' },
                        { to: '/alldeletecontent', label: 'All Delete Content' },

                    ],
                },
                {
                    label: 'Manu Management',
                    dropdownOptions: [
                        { to: '/createManu', label: 'Create Manu ' },
                        { to: '/allmanu', label: 'All Manu' },
                        { to: '/alldeletemanu', label: 'All Delete Manu' },
                    ],
                },

            ];
        } else if (admin === '_admin' && userTypeCheck !== "supreme_admin") {
            if (userTypeCheck?.user_type === "content_writer_admin") {
                navigationLinks = [
                    { to: '/', label: 'Home' },
                    { to: '/createadminuser', label: 'Create User' },
                    {
                        label: 'Content Management',
                        dropdownOptions: [
                            { to: '/contentcreate ', label: 'Create Content' },
                            { to: '/allcontent', label: 'All Content' },
                            { to: '/alldeletecontent', label: 'All Delete Content' },
                        ],
                    },
                    {
                        label: 'Manu Management',
                        dropdownOptions: [
                            { to: '/createManu', label: 'Create Manu ' },
                            { to: '/allmanu', label: 'All Manu' },
                            { to: '/alldeletemanu', label: 'All Delete Manu' },

                        ],
                    },


                ];
            } else {
                navigationLinks = [
                    { to: '/', label: 'Home' },
                    { to: '/createadminuser', label: 'Create User' },
                ];
            }
        } else {

            if (userTypeCheck?.user_type === "content_writer") {
                navigationLinks = [
                    { to: '/', label: 'Home' },
                    { to: '/contentcreate', label: 'Content Create' },
                    { to: '/allwritercontent', label: 'All  Content' },
                ];
            } else {
                navigationLinks = [
                    { to: '/', label: 'Home' },
                    <li className='p-2 px-2'>No admin found</li>,
                ];
            }
        }
    } else {

        navigationLinks = [
            { to: '/', label: 'Home' },
            <Link className='link link-error' to='/verifyemail'>Please verify email</Link>

        ]

    }


    // if (userTypeCheck?.user_type !== undefined) {
    //     if (userTypeCheck?.user_type === "supreme_admin") {
    //         navigationLinks = [


    //             <NavLink to='/'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    //                 Home
    //             </NavLink>
    //             // <SubNavLinks to='/'>Home</SubNavLinks>
    //             ,
    //             <details close>

    //                 <summary>
    //                     My Users
    //                 </summary>

    //                 {/* <li className='p-2'><NavLink to='/users'>
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    //                     </svg>

    //                     All Users
    //                 </NavLink>
    //                 </li> */}

    //                 <CustomNavItem to='/users' icon={
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    //                     </svg>
    //                 } label=" All Users" />
    //                 <CustomNavItem to='/createsuperuser' icon={
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    //                     </svg>
    //                 } label="Create Super Use" />


    //             </details>,

    //             <details close>

    //                 <summary>
    //                     content option
    //                 </summary>
    //                 <CustomNavItem to='/contentcreate' icon={
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                     </svg>
    //                 } label="content create" />
    //                 <CustomNavItem to='/allcontent' icon={
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                     </svg>
    //                 } label="all content" />


    //             </details>,
    //             <details close>

    //                 <summary>
    //                     Manu
    //                 </summary>

    //                 <CustomNavItem to='/createManu' icon={
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                     </svg>
    //                 } label="Create manu" />
    //                 <CustomNavItem to='/allmanu' icon={
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                         <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                     </svg>
    //                 } label="All manu" />



    //             </details>,


    //         ]
    //     } else if (admin === '_admin' && userTypeCheck !== "supreme_admin") {



    //         {
    //             if (userTypeCheck?.user_type === "content_writer_admin") {
    //                 navigationLinks = [


    //                     <NavLink to='/'>
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    //                         Home
    //                     </NavLink>,
    //                     <NavLink to='/createadminuser'>Ceate user</NavLink>
    //                     ,

    //                     <details close>

    //                         <summary>
    //                             content option
    //                         </summary>

    //                         <CustomNavItem to='/contentcreate' icon={
    //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                             </svg>
    //                         } label="content create" />
    //                         <CustomNavItem to='/allcontent' icon={
    //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                             </svg>
    //                         } label="all content" />


    //                     </details>


    //                 ]

    //             } else {
    //                 navigationLinks = [

    //                     <NavLink to='/'>
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    //                         Home
    //                     </NavLink>,
    //                     <NavLink to='/createadminuser'>Ceate user</NavLink>
    //                 ]
    //             }
    //         }
    //     } else {
    //         if (userTypeCheck?.user_type === "content_writer") {
    //             navigationLinks = [
    //                 <NavLink to='/'>
    //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    //                     Home
    //                 </NavLink>,

    //                 <details close>

    //                     <summary>
    //                         content option
    //                     </summary>

    //                     <summary>
    //                         content option
    //                     </summary>
    //                     <CustomNavItem to='/contentcreate' icon={
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                         </svg>
    //                     } label="content create" />
    //                     <CustomNavItem to='/allwritercontent' icon={
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                             <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    //                         </svg>
    //                     } label="all content" />




    //                 </details>
    //             ]
    //         } else {
    //             navigationLinks = [
    //                 <NavLink to='/'>
    //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    //                     Home
    //                 </NavLink>,

    //                 <li className='p-2 px-2'>No admin found</li>
    //             ]
    //         }
    //     }
    // } else {
    //     navigationLinks = [
    //         <NavLink to='/'>
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    //             Home
    //         </NavLink>,


    //         <Link className='link link-error' to='/verifyemail'>Please verify email</Link>

    //     ]
    // }


    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }



    return (
        <div className=''>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="h-screen bg-base-100 drawer-content flex flex-col ">
                    <Navber />
                    <Outlet />
                </div>
                <div className="w-72 h-full bg-white">
                    <ul className="menu pt-5 p-2 w-72 bg-white ">
                        <div className='px-5 py-2 font-medium text-lg flex flex-row items-center'>
                            {/* <img className='w-[30px]' src='artxcore1.png' alt='logo' /> */}
                            <p className='px-2'>Aerxcore</p>
                        </div>

                        {navigationLinks.map((link, index) => (
                            <li className='p-2' key={index}>
                                {link.dropdownOptions ? (
                                    <details close>
                                        <summary>{link.label}</summary>
                                        <ul>
                                            {link.dropdownOptions.map((option, optionIndex) => (
                                                <li className='p-2' key={optionIndex}>
                                                    <NavLink to={option.to} activeClassName='text-primary'>
                                                        {option.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <NavLink to={link.to} activeClassName='text-primary'>
                                        {link.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}

                        {/* {userNavigationConfig.map((link, index) => (
                            <li className='p-2' key={index}>
                                <NavLink to={link.to} activeClassName='text-primary'>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
