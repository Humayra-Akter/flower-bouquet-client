import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
        const [user, loading, error] = useAuthState(auth);
        const logout = () => {
                signOut(auth);
        }

        const menuItems = <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointment">Appointment</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>{user ? <button onClick={logout} className="btn btn-ghost font-bold text-lg text-pink-700 uppercase">Signout</button> : <Link to="/login">Login</Link>}</li>
        </>
        return (
                <div className="navbar border-primary bg-gradient-to-l from-accent to-secondary">
                        <div className="navbar-start">
                                <div className="dropdown">
                                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>
                                        <ul tabIndex="0" className="menu menu-compact bg-gradient-to-l from-accent to-secondary font-bold uppercase text-pink-700 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                                                {menuItems}
                                        </ul>
                                </div>
                                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                        </div>
                        <div className="navbar-end hidden lg:flex">
                                <ul className="menu menu-horizontal font-bold text-pink-700 uppercase px-1">
                                        {menuItems}
                                </ul>
                        </div>
                </div>
        );
};

export default Navbar;