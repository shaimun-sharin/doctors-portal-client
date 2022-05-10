import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import clock from "../../../src/assets/icons/clock.svg";
import marker from "../../../src/assets/icons/marker.svg";
import phone from "../../../src/assets/icons/phone.svg";

const Info = () => {
  return (
    <div>
      <InfoCard img={clock}></InfoCard>
    </div>
  );
};

export default Info;
