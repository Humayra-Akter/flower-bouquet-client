import React from 'react';
import bouquet from '../../assets/images/bouquet.png';
import bg from '../../assets/images/bg.png';


const Banner = () => {
        return (
                <div className='hero bg-pink-100 min-h-screen'>
                        <div class="card flex-col gap-16 px-10 lg:card-side">
                                <figure><img className='max-w-sm rounded-lg shadow-2xl' src={bouquet} alt="flower" /></figure>
                                <div class="card-body">
                                        <h2 class="text-5xl font-bold text-pink-700">When You Think Of Flowers</h2>
                                        <h2 class="text-5xl font-bold text-pink-700">Think Of Ours</h2>
                                        <p className='text-xs pt-6 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos illum molestiae recusandae quia, sequi odio qui vel maxime officiis.</p>
                                        <button className='btn w-1/2 font-bold text-lg border-accent border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary'>Get started</button>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;