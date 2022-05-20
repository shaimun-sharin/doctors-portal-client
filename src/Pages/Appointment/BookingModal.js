import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user] = useAuthState(auth);
  const formatedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("https://rocky-beach-02886.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set , ${formatedDate} at ${slot}`, {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
          });
        } else {
          toast.error(
            `Already have an appointment on , ${data.booking?.date} at ${data.booking?.slot}`,
            {
              position: toast.POSITION.TOP_CENTER,
              theme: "colored",
            }
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-secondary text-lg">
            Booking For : <span className="text-red-400">{name}</span>
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid pt-2 grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered input-secondary input-sm w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option key={_id} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              class="input input-bordered input-secondary input-sm w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              class="input input-bordered input-secondary input-sm w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              class="input input-bordered input-secondary input-sm w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              class=" btn btn-secondary input-sm w-full max-w-xs"
            />
          </form>
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
