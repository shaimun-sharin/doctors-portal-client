import React from "react";
import Info from "../../Info/Info";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact";
import MakeAppointment from "../MakeAppointment";
import Testimonials from "../Testimonials";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
