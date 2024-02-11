

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
                        // { to: '/alldeletecontent', label: 'All Delete Content' },

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
                            // { to: '/alldeletecontent', label: 'All Delete Content' },
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
                    { to: '/allwritercontent', label: 'All Content items' },
                    { to: '/allmanu', label: 'All Menu items' },
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
                            <img className='w-[35px]' src='/Logo-Update-2.png' alt='logo' />
                            <p className='px-3'>Artixcore</p>
                        </div>

                        {navigationLinks.map((link, index) => (
                            <li className='p-2' key={index}>
                                {link.dropdownOptions ? (
                                    <details key={`details-${index}`} >
                                        <summary>{link.label}</summary>
                                        <ul>
                                            {link.dropdownOptions.map((option, optionIndex) => (
                                                <li className='p-2' key={`option-${index}-${optionIndex}`}>
                                                    <NavLink to={option.to} activeclassname='text-primary'>
                                                        {option.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <NavLink to={link.to} activeclassname='text-primary'>
                                        {link.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
