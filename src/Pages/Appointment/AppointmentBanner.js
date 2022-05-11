import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen px-12">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-8">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p className="font-bold text-red-700">You have selected</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
