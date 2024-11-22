import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointments = ({ selectedDate }) => {
  const [bouquet, setBouquet] = useState(null);
  const formattedDate = format(selectedDate, "PP");

  const {
    data: appointmentOptions,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h1 className="text-center text-2xl font-bold text-pink-700">
        Available Appointment on {format(selectedDate, "PP")}.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 pt-8">
        {appointmentOptions?.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setBouquet={setBouquet}
          ></AppointmentOptions>
        ))}
      </div>
      {bouquet && (
        <BookingModal
          selectedDate={selectedDate}
          bouquet={bouquet}
          setBouquet={setBouquet}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
