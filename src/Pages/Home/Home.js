import React from 'react';
import Banner from './Banner';
import Bouquet from './Bouquet';
import ContactDemo from './ContactDemo';
import Info from './Info';
import SellingExperience from './SellingExperience';
import Services from './Services';

const Home = () => {
        return (
                <div className='bg-pink-100'>
                        <Banner></Banner>
                        <Info></Info>
                        <Services></Services>
                        <Bouquet></Bouquet>
                        <SellingExperience></SellingExperience>
                        <ContactDemo></ContactDemo>
                </div>
        );
};

export default Home;