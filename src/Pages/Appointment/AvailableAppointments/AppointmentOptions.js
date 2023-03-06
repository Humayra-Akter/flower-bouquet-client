import React from 'react';

const AppointmentOptions = ({ appointmentOption, setBouquet }) => {
        const { _id, event, flowers } = appointmentOption;
        return (
                <div className="card mt-20 bg-gradient-to-b from-accent to-secondary shadow-xl p-2">
                        <div class="card-body text-center">
                                <h2 class="card-title justify-center text-xl font-bold text-pink-700">{event}</h2>
                                {/* <p className='text-sm font-bold'>{flowers.length > 0 ? flowers[0] : 'Try another day'}</p> */}
                                <p className='text-sm font-bold'>{flowers.length} {flowers.length > 1 ? 'flowers' : 'flower'} available.</p>
                                <div class="card-actions mt-5 justify-center">
                                        <label
                                                for="booking-modal"
                                                className='btn btn-sm w-1/2 font-bold text-sm border-accent border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary'
                                                onClick={() => setBouquet(appointmentOption)}
                                        >Book now</label>
                                </div>
                        </div>
                </div>
        );
};

export default AppointmentOptions;