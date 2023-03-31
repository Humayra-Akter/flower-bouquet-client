import React from 'react';
import icon1 from '../../assets/images/location.png';
import icon2 from '../../assets/images/email.png';
import icon3 from '../../assets/images/questions.png';

const Contact = () => {
        return (
                <section className='mt-20 px-4'>
                        <h1 className='text-center text-2xl font-bold text-pink-700'>Contact Us</h1>
                        <div className='lg:flex gap-7 pt-16 px-40'>
                                <div class="card hover:bg-gradient-to-r from-accent to-secondary w-80 pt-8 bg-gradient-to-b from-accent to-secondary shadow-xl">
                                        <figure><img className='w-16 h-16 hover:animate-bounce' src={icon1} /></figure>
                                        <div class="card-body">
                                                <h2 className="text-center text-xl font-bold text-pink-700">Our Location</h2>
                                                <p className='text-center text-xs font-semibold text-pink-900'> (800) 123 456 789 / (800) 123 456 789</p>
                                                <p className='text-center text-xs font-semibold text-pink-900'> info@example.com</p>
                                        </div>
                                </div><div class="card hover:bg-gradient-to-r from-accent to-secondary w-80 pt-8 bg-gradient-to-b from-accent to-secondary shadow-xl">
                                        <figure><img className='w-16 h-16 hover:animate-bounce' src={icon2} /></figure>
                                        <div class="card-body">
                                                <h2 className="text-center text-xl font-bold text-pink-700">Contact us Anytime</h2>
                                                <p className='text-center text-xs font-semibold text-pink-900'>Mobile: 012 345 678</p>
                                                <p className='text-center text-xs font-semibold text-pink-900'>Fax: 123 456 789</p>
                                        </div>
                                </div><div class="card hover:bg-gradient-to-r from-accent to-secondary w-80 pt-8 bg-gradient-to-b from-accent to-secondary shadow-xl">
                                        <figure><img className='w-16 h-16 hover:animate-bounce' src={icon3} /></figure>
                                        <div class="card-body">
                                                <h2 className="text-center text-xl font-bold text-pink-700">Support Overall</h2>
                                                <p className='text-center text-xs font-semibold text-pink-900'>info@example.com</p>
                                                <p className='text-center text-xs font-semibold text-pink-900'>Support24/7@example.com</p>
                                        </div>
                                </div>
                        </div>
                        <div className="w-full p-16">
                                <h1 className='text-left pl-9 pt-5 text-xl font-bold text-sm text-pink-700'>For more contact us</h1>
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
                                                <button className="btn hover:bg-gradient-to-r from-accent to-secondary font-bold lg:w-1/4 text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">GET in touch</button>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default Contact;