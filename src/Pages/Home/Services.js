import React from 'react';
import rose from '../../assets/icons/img1.png';
import rose1 from '../../assets/icons/img2.png';
import rose2 from '../../assets/icons/img3.png';
import rose3 from '../../assets/icons/img4.png';
import Service from './Service';

const Services = () => {
        const services = [
                {
                        _id: 1,
                        name: 'Everyday Occasion',
                        description: '',
                        img: rose
                },
                {
                        _id: 2,
                        name: 'Birthday',
                        description: '',
                        img: rose1
                },
                {
                        _id: 3,
                        name: 'Congratulations',
                        description: '',
                        img: rose2
                },
                {
                        _id: 4,
                        name: 'Corporate Gifting',
                        description: '',
                        img: rose3
                }
        ]
        return (
                <div>
                        <div className='mt-40 mb-14'>
                                <h1 className='text-3xl font-bold text-center text-pink-700'>OUR SERVICES</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6'>
                                {
                                        services.map(service => <Service
                                                key={service._id}
                                                service={service}
                                        ></Service>)
                                }
                        </div>
                </div>
        );
};

export default Services;