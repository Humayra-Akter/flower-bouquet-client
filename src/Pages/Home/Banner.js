import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import bouquet from '../../assets/icons/img1.png';
import img1 from '../../assets/icons/img1.png';
import img2 from '../../assets/icons/img2.png';
import img3 from '../../assets/icons/img3.png';
import img4 from '../../assets/icons/img4.png';


const Banner = () => {

        return (
                <div className='hero bg-pink-100 min-h-screen'>
                        <div>
                                <div className="card flex-col gap-16 px-10 lg:card-side">
                                        <div className='flex'>
                                                <Routes>
                                                        <Route index ></Route>
                                                </Routes>

                                        </div>
                                        <div className="drawer drawer-mobile">
                                                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                                                <div className="drawer-content">
                                                        <h1 className='p-10'><img className='px-6 py-px' src={bouquet} alt="Album" /></h1>
                                                        <Outlet></Outlet>
                                                </div>
                                                <div className="drawer h-80 mt-20 pl-0">
                                                        <label for="banner-drawer" className="drawer-overlay"></label>
                                                        <ul className="menu pl-0 p-4 flex w-20 bg-pink-100 text-sm font-bold text-pink-700 text-base-content">
                                                                <li className='cursor-pointer w-16 hover:-translate-y-3' ><img src={img1} alt="Album" /></li>
                                                                <li className='cursor-pointer w-16 hover:-translate-y-3' ><img src={img2} alt="Album" /></li>
                                                                <li className='cursor-pointer w-16 hover:-translate-y-3' ><img src={img3} alt="Album" /></li>
                                                                <li className='cursor-pointer w-16 hover:-translate-y-3' ><img src={img4} alt="Album" /></li>
                                                        </ul>

                                                </div>
                                        </div>
                                        <div className="card-body">
                                                <h2 className="text-5xl font-bold text-pink-700">When You Think Of Flowers</h2>
                                                <h2 className="text-5xl font-bold text-pink-700">Think Of Ours</h2>
                                                <p className='text-xs pt-6 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos illum molestiae recusandae quia, sequi odio qui vel maxime officiis.</p>
                                                <button className='btn w-1/2 font-bold text-lg border-accent border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary'>Get started</button>
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default Banner;