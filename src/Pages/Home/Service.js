import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/banner.png'

const Service = ({ service }) => {
        return (
                <div className="card bg-gradient-to-b from-accent to-secondary shadow-xl p-2">
                        <div
                                style={{
                                        background: `url(${bg})`,
                                        backgroundSize: 'cover'
                                }}
                                className="card-body items-center text-center">
                                <h2 className="card-title text-2xl font-bold text-pink-700">{service.name}</h2>
                                <p>{service.description}.</p>
                        </div>
                </div>
        );
};

export default Service;