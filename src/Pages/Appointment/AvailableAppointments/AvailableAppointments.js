import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
        const [appointmentOptions, setAppointmentOptions] = useState([]);
        const [bouquet, setBouquet] = useState(null);

        useEffect(() => {
                fetch('http://localhost:5000/service')
                        .then(res => res.json())
                        .then(data => setAppointmentOptions(data))
        }, [])
        return (
                <section className='mt-24'>
                        <h1 className='text-center text-2xl font-bold text-pink-700'>Available Appointment on {format(selectedDate, 'PP')}.</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 pt-8'>
                                {
                                        appointmentOptions.map(option => <AppointmentOptions
                                                key={option._id}
                                                appointmentOption={option}
                                                setBouquet={setBouquet}
                                        ></AppointmentOptions>)
                                }
                        </div>
                        {
                                bouquet &&
                                <BookingModal
                                        selectedDate={selectedDate}
                                        bouquet={bouquet}
                                        setBouquet={setBouquet}
                                ></BookingModal>
                        }
                </section>
        );
};

export default AvailableAppointments;