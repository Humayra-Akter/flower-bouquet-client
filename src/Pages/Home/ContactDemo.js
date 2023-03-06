import React from 'react';
import bg from '../../assets/images/bg.png'

const ContactDemo = () => {
        return (
                <section className='mt-56 px-4'>

                        <div
                                style={{
                                        background: `url(${bg})`,
                                        backgroundSize: 'cover'
                                }} class="hero min-h-screen">
                                <div class="card w-full max-w-lg">
                                        <h1 className='text-center text-2xl font-bold text-pink-700'>Contact Us</h1>
                                        <div class="card-body">
                                                <div class="form-control">
                                                        <label class="label">
                                                                <span class="label-text">Email</span>
                                                        </label>
                                                        <input type="text" placeholder="email" class="input input-bordered" />
                                                </div>
                                                <div class="form-control">
                                                        <label class="label">
                                                                <span class="label-text">Password</span>
                                                        </label>
                                                        <input type="text" placeholder="password" class="input input-bordered" />
                                                        <label class="label">
                                                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                                        </label>
                                                </div>
                                                <div class="form-control mt-6">
                                                        <button class="btn font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">Login</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default ContactDemo;