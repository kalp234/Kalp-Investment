import React from "react";
import "./App.css";
import "flowbite";
import Banner from "./Components/Banner";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import Mutualfund from "./Components/Mutualfund";
import LIC from "./Components/LIC";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/Scrolltotopbutton";

function Homepage() {
  return (
    <div className=" App" name="Home">
      <Banner />
      <Aboutus />
      <Services />
      <Mutualfund />
      <LIC />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Homepage;
