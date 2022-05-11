import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center ">
        <h2 class="card-title text-secondary ">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-700">Try another date</span>
          )}
        </p>
        <p>
          {slots.length}
          {slots.length > 1 ? "spaces" : "space"} available.
        </p>
        <div class="card-actions justify-end">
          <label
            for="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            class="btn mx-auto btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ..."
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
