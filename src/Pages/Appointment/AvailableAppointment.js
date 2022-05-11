import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h2 className="font-bold text-red-700">
        Available appointment on -{format(date, "PP")}
      </h2>
    </div>
  );
};

export default AvailableAppointment;
