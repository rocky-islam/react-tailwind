import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        {id:1, name:'Home', path: '/home'},
        {id:2, name:'Products', path: '/products'},
        {id:3, name:'Order', path: '/order'},
        {id:4, name:'Contact', path: '/contact'},
        {id:5, name:'About', path: '/about'}
    ]
    return (
        <nav className='bg-purple-300 w-full'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon> 
            }
            </div>
            {/* <Bars3Icon onClick={() => setOpen(!open)} className='h-6 w-6'></Bars3Icon> */}
            {/* <span>{open ? 'open' : 'close'}</span> */}
            <ul className={` bg-purple-300 md:flex w-full justify-center absolute md:static duration-700 ease-in ${open ? 'top-6' : 'top-[-220px]'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;