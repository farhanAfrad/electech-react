import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const link = <div className='space-x-2'>
        <Link to='/' className='border px-3 py-1 rounded'>Home</Link>
        <Link to='/mycart' className='border px-3 py-1 rounded'>My Cart</Link>
        <Link to='/addproduct' className='border px-3 py-1 rounded'>Add Product</Link>
        <Link to='/allproduct' className='border px-3 py-1 rounded'>All Product</Link>
        <Link to='/login' className='border px-3 py-1 rounded'>Login</Link>
    </div>
    const handleSignout = () => {
        logOut()
            .then(() => navigate('/login'))
            .catch(error => console.log(error.message));
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ElecTech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div>
                            <button className="btn" onClick={handleSignout}>signout</button>
                            <p>{user.email}</p>
                        </div>
                            : <Link to='/login'>
                                <button className="btn">signIn</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;