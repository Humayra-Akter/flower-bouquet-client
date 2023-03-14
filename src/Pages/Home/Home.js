import React from 'react';
import Banner from './Banner';
import Bouquet from './Bouquet';
import ContactDemo from './ContactDemo';
import Info from './Info';
import SellingExperience from './SellingExperience';
import Services from './Services';
import img1 from '../../assets/icons/img1.png';
import img2 from '../../assets/icons/img2.png';
import img3 from '../../assets/icons/img3.png';
import img4 from '../../assets/icons/img4.png';
import img5 from '../../assets/icons/img5 .png';
import img6 from '../../assets/icons/img6.png';
import img7 from '../../assets/icons/img7.png';

const Home = () => {
        return (
                <div className='bg-pink-100'>
                        <Banner></Banner>
                        <div className='flex justify-center screen'>
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img1} alt="" />
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img2} alt="" />
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img3} alt="" />
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img4} alt="" />
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img5} alt="" />
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img6} alt="" />
                                <img className='w-16 h-16 cursor-pointer hover:-translate-y-6 p-3' src={img7} alt="" />
                        </div>
                        <Info></Info>
                        <Services></Services>
                        <Bouquet></Bouquet>
                        <SellingExperience></SellingExperience>
                        <ContactDemo></ContactDemo>
                </div>
        );
};

export default Home;