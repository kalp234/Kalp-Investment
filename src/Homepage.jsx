import React from 'react';
import './App.css';
import 'flowbite';
import Banner from './Components/Banner';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import  Mutualfund  from './Components/Mutualfund';
import Footer from './Components/Footer'

function Homepage() {
  return (
    <div className=" App" name="Home">
      <Banner/>
      <Aboutus/>
      <Services/>
      <Mutualfund/>
      <Footer />
    </div>
  );
}

export default Homepage;
