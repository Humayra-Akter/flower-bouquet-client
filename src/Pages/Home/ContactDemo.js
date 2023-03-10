import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.png'

const ContactDemo = () => {
        return (
                <section className='mt-56 px-4'>

                        <div
                                style={{
                                        background: `url(${bg})`,
                                        backgroundSize: 'cover'
                                }} className="hero min-h-screen">
                                <div className="card w-full max-w-lg">
                                        <h1 className='text-center text-2xl font-bold text-pink-700'>Contact Us</h1>
                                        <div className="card-body">
                                                <div className="form-control">
                                                        <label className="label">
                                                                <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="text" placeholder="email" className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                        <label className="label">
                                                                <span className="label-text">Password</span>
                                                        </label>
                                                        <input type="text" placeholder="password" className="input input-bordered" />
                                                        <label className="label">
                                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                        </label>
                                                </div>
                                                <div className="form-control mt-6">
                                                        <button className="btn font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">Login</button>
                                                </div>

                                                <div className="divider text-xl font-bold text-pink-900">OR</div>
                                                <div className="form-control mt-6">
                                                        <button
                                                                className="btn btn-md font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary"><Link className='text-pink-700 font-bold' to="/login">Login to account</Link></button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default ContactDemo;