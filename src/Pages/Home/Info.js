import React from 'react';
import InfoCard from './InfoCard';
import delivery from '../../assets/icons/fast-delivery.png'
import payment from '../../assets/icons/debit-card.png'
import service from '../../assets/icons/customer-service.png'

const Info = () => {
        return (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pt-8'>
                        <InfoCard bgClass="bg-gradient-to-l from-accent to-secondary" cardTitle="Free Delivery" img={delivery}></InfoCard>
                        <InfoCard bgClass="bg-gradient-to-l from-accent to-secondary" cardTitle="Safe Payment" img={payment}></InfoCard>
                        <InfoCard bgClass="bg-gradient-to-l from-accent to-secondary" cardTitle="Friendly Service" img={service}></InfoCard>
                </div>
        );
};

export default Info;