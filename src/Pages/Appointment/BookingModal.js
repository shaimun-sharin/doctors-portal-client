import React from "react";

const BookingModal = ({ treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-secondary text-lg">
            Booking For : <span className="text-red-400">{name}</span>
          </h3>
          {/* <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p> */}
          <div class="modal-action">
            <label
              for="booking-modal"
              class="btn btn-sm btn-circle bg-secondary text-white absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
