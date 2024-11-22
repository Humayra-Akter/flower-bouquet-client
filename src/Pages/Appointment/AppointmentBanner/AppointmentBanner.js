import React, { useState } from "react";
import img from "../../../assets/icons/dong-cheng-krEjviclb4E-unsplash.jpg";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero min-h-screen bg-pink-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-sm lg:ml-20 rounded-lg shadow-2xl" />
        <div className="lg:mr-20">
          <DayPicker
            styles={{
              caption: { color: "red" },
            }}
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
