import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bouquet, selectedDate, setBouquet }) => {
        const { event, flowers } = bouquet;
        const handleBooking = e => {
                e.preventDefault();
                const flower = e.target.flower.value;
                console.log(event, flower);
                setBouquet(null);
        }

        return (
                <>
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal">
                                <div className="modal-box relative bg-pink-100">
                                        <label
                                                for="booking-modal"
                                                class="btn btn-sm text-red-700 bg-secondary btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="text-lg text-center text-pink-700 font-bold">{event}</h3>
                                        <form onSubmit={handleBooking} className='mt-5 grid grid-cols-1 gap-3 justify-items-center'>
                                                <input type="text" disabled value={format(selectedDate, 'PP')} class="input input-bordered w-full max-w-xs" />
                                                <select name="flower" class="select select-bordered w-full max-w-xs">
                                                        {
                                                                flowers.map(flower => <option value={flower}>{flower}</option>)
                                                        }
                                                </select>
                                                <input type="text" name="name" placeholder="name" class="input input-bordered w-full max-w-xs" />
                                                <input type="email" name="email" placeholder="email" class="input input-bordered w-full max-w-xs" />
                                                <input type="number" name="phone" placeholder="phone" class="input input-bordered w-full max-w-xs" />
                                                <input type="SUBMIT" value="submit" class="btn btn-sm bg-gradient-to-l from-accent to-secondary text-sm font-bold text-pink-700 w-full max-w-xs" />
                                        </form>
                                </div>
                        </div>
                </>
        );
};

export default BookingModal;