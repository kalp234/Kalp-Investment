import React, { useEffect } from "react";
import "./App.css";
import "flowbite";
import Banner from "./Components/Banner";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import Mutualfund from "./Components/Mutualfund";
import LIC from "./Components/LIC";
import Mediclaim from "./Components/Mediclaim";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/Scrolltotopbutton";

import { Element } from "react-scroll";

function Homepage() {

  return (
    <div className="App" name="Home">
      <Element name="Home">
        <Banner />
      </Element>
      <Element name="About">
        <Aboutus />
      </Element>
      <Element name="Services">
        <Services />
      </Element>
      <Element name="Mutual Funds">
        <Mutualfund />
      </Element>
      <Element name="LIC Plans">
        <LIC />
      </Element>
      <Element name="Mediclaim">
        <Mediclaim />
      </Element>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Homepage;
