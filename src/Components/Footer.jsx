import React from "react";
import "../App.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#e3e6f3] border-t-4 border-gray-600 shadow-lg p-8 rounded-t-sm ">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
        <div className="w-full md:w-1/2 flex flex-col text-left leading-7 md:leading-8 p-4 md:border-r md:border-gray-400">
          <img
            className="w-44 md:w-[16rem] h-32 ml-10 md:ml-0 md:h-44  md:mb-[-2.25rem] mt-[-1.5rem] md:mt-0 "
            src={logo}
            alt="Kalp Investment Logo"
          />
          <h4 className="text-xl font-bold text-red-800 mt-[-1.5rem] md:mt-0  mb-2 border-b-2 border-gray-600 inline-block pb-1">
            Contact:
          </h4>
          <p className="text-red-800 font-bold">
            Address:{" "}
            <span className="text-green-800">
              312, 3rd Floor, Satya-2, Next to Bharat Petrol Pump, Opp. Ranna
              Park Bus Stop, Ghatlodia, Ahmedabad-380061
            </span>
          </p>
          <p className="text-red-800 font-bold">
  Email:{" "}
  <a
    href="mailto:kalpinvestment@gmail.com"
    className="text-green-800 hover:underline"
  >
    kalpinvestment@gmail.com
  </a>
</p>
          <p className="text-red-800 font-bold">
            Hours:{" "}
            <span className="text-green-800">
              {" "}
              10:00 AM - 7:00 PM, Mon - Sat
            </span>
          </p>
          <p className="text-red-800 font-bold">
  Phone:{" "}
  <a
    href="tel:+919898488243"
    className="text-green-800 hover:underline"
  >
    +91-9898488243
  </a>
</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start md:ml-[4rem] p-4">
          <h4 className="text-xl text-black  font-bold mb-3 border-b-2 border-gray-600 inline-block pb-1">
            Find Us:
          </h4>
          <div className="border-2 border-gray-500 rounded-lg overflow-hidden shadow-md w-full md:w-[25.3rem]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.858939400785!2d72.54477352394522!3d23.065632564722517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8366d33c3de5%3A0x16fb1ea27975b0dd!2sSATYA%20TWO!5e0!3m2!1sen!2sin!4v1741326970646!5m2!1sen!2sin"
              className="w-full h-[250px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t-2 mb-[-20px] md:mb-0 border-gray-500 pt-4 text-gray-700 font-medium text-sm">
        <p>© 2025 Kalp Investment. All Rights Reserved.</p>
        <p className="mt-1 text-gray-700 flex justify-center items-center gap-1">
          Made by
          <a
            href="https://www.linkedin.com/in/kalpshah0234" // 🔗 Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-semibold text-blue-700 hover:underline"
          >
            Kalp Shah
            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 mt-[-2px]" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
