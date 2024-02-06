
import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavItem = ({ to, icon, label }) => (
    <li className='p-2'>
        <NavLink to={to}>
            {icon && React.cloneElement(icon, { className: 'w-6 h-6' })}
            {label}
        </NavLink>
    </li>
);

export default CustomNavItem;
