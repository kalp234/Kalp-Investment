import React, { useState, useEffect } from "react";
import "./App.css";
import "flowbite";
import Banner from "./Components/Banner";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import Mutualfund from "./Components/Mutualfund";
import LIC from "./Components/LIC";
import Mediclaim from "./Components/Mediclaim";
import Chatbot from "./Components/Chatbot";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/Scrolltotopbutton";
import { Element } from "react-scroll";

function Homepage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 300) {
        setShowChatbot(true);
      } else {
        setShowChatbot(false);
        setIsChatOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {/* Show chatbot only if scrolled more than 300px */}
      {showChatbot && <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />}

      <Footer />
      <ScrollToTopButton onScrollTop={() => setIsChatOpen(false)} />
    </div>
  );
}

export default Homepage;
