import React from 'react';
import icon1 from '../../assets/images/location.png';
import icon2 from '../../assets/images/email.png';
import icon3 from '../../assets/images/questions.png';

const Contact = () => {
        return (
                <section className='mt-20 px-4'>
                        <div className='flex gap-5 p-20'>
                                <div class="card w-96 bg-base-100 shadow-xl">
                                        <figure><img className='w-16 h-16' src={icon1} /></figure>
                                        <div class="card-body">
                                                <h2 className="text-center text-xl font-bold text-pink-700">Our Location</h2>
                                                <p className='text-center'> (800) 123 456 789 / (800) 123 456 789</p>
                                                <p className='text-center'> info@example.com</p>
                                        </div>
                                </div><div class="card w-96 bg-base-100 shadow-xl">
                                        <figure><img className='w-16 h-16' src={icon2} /></figure>
                                        <div class="card-body">
                                                <h2 className="text-center text-xl font-bold text-pink-700">Contact us Anytime</h2>
                                                <p className='text-center'>Mobile: 012 345 678</p>
                                                <p className='text-center'>Fax: 123 456 789</p>
                                        </div>
                                </div><div class="card w-96 bg-base-100 shadow-xl">
                                        <figure><img className='w-16 h-16' src={icon3} /></figure>
                                        <div class="card-body">
                                                <h2 className="text-center text-xl font-bold text-pink-700">Support Overall</h2>
                                                <p className='text-center'>Support24/7@example.com</p>
                                                <p className='text-center'>info@example.com</p>
                                        </div>
                                </div>
                        </div>
                        <div className="w-full p-16">
                                <h1 className='text-center text-2xl font-bold text-pink-700'>Contact Us</h1>
                                <div className="card-body">
                                        <div className='flex gap-4'>
                                                <div className="form-control w-1/2">
                                                        <input type="text" placeholder="name" className="input input-bordered border-pink-700" />
                                                </div>
                                                <div className="form-control w-1/2">
                                                        <input type="text" placeholder="email" className="input input-bordered border-pink-700" />
                                                </div>
                                        </div>
                                        <div className="form-control">
                                                <input type="text" placeholder="subject" className="input input-bordered border-pink-700" />
                                        </div>
                                        <div className="form-control">
                                                <input type="text" placeholder="your message" className="input input-lg input-bordered border-pink-700" />
                                        </div>
                                        <div className="form-control mt-6">
                                                <button className="btn font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">GET in touch</button>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default Contact;