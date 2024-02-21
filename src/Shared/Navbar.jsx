import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.jpg';

const Navbar = () => {
    const links = <>
        <li><NavLink className='text-xl font-semibold' to='/'>Home</NavLink></li>
        <li><NavLink className='text-xl font-semibold' to='/services'>Services</NavLink></li>

        {/* {user?.email &&
            <li tabIndex={0}>
                <details className=''>
                    <summary className='text-xl font-semibold'>dashboard</summary>
                    <ul className="p-2">
                        <li><NavLink className='font-bold' to='/manage-services'>Manage Services</NavLink></li>
                        <li><NavLink className='font-bold' to='/add-services'>Add Services</NavLink></li>
                        <li><NavLink className='font-bold' to='/my-schedules'>My Schedules</NavLink></li>
                    </ul>
                </details>
            </li>
        } */}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className=''>
                    <Link to="/"> <img src={logo} className='w-24 h-12' alt="" /></Link>
                </div>
                <Link to="/" className="btn btn-ghost normal-case font-bold hidden lg:block text-xl">Baby Toy Store</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user?.email ? <div className="flex">
                        <button className="btn btn-sm text-xl font-semibold btn-ghost">{user?.displayName}</button>
                        <div className="">
                            <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="userName" />
                        </div>

                        <button onClick={handleLogOut} className="btn text-xl font-semibold btn-sm btn-ghost">Logout</button>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm text-xl font-semibold btn-ghost">Login</button>
                        </Link>
                } */}
                <button className="btn btn-sm text-xl font-semibold btn-ghost">Login</button>
            </div>
        </div>
    );
};

export default Navbar;