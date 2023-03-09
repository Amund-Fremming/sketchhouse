import React from 'react';
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {

    return(
        <>
            <div className='shadow-md w-full sticky top-0 left-0 z-50'>
                <div className='h-24 bg-orange-400 md:flex py-4 md:px-10'>
                    <div className='flex items-center '>
                        <NavLink to="/">
                            <img className='w-20 h-20' src={require("../images/ss-logo.png")} />
                        </NavLink>
                    </div>
                    <ul className='md:flex md:items-center'>
                        <NavLink to="gallery">
                            <li className='font-marker'>gallery</li>
                        </NavLink>
                        <NavLink to="newsletter">
                            <li className='font-marker'>newsletter</li>
                        </NavLink>
                        <NavLink to="contact">
                            <li className='font-marker'>contact</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;