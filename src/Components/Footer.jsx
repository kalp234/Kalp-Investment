import React from 'react';
import "../App.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#e3e6f3] border-t-4 border-gray-600 shadow-lg p-8 rounded-t-sm ">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
        <div className="w-full md:w-1/2 flex flex-col text-left leading-7 md:leading-8 p-4 md:border-r md:border-gray-400">
          <img className="w-44 md:w-[16rem] h-32 ml-10 md:ml-0 md:h-44  md:mb-[-2.25rem] mt-[-1.5rem] md:mt-0 " src={logo} alt="Kalp Investment Logo" />
          <h4 className="text-xl font-bold mt-[-1.5rem] md:mt-0  mb-2 border-b-2 border-gray-600 inline-block pb-1">Contact:</h4>
          <p className="text-gray-800"><strong>Address:</strong> 312, 3rd Floor, Satya-2, Next to Bharat Petrol Pump, Opp. Ranna Park Bus Stop, Ghatlodia, Ahmedabad-380061</p>
          <p className="text-gray-800"><strong>Phone:</strong> +91-9898488243</p>
          <p className="text-gray-800"><strong>Hours:</strong> 10:00 AM - 7:00 PM, Mon - Sat</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start md:ml-[4rem] p-4">
          <h4 className="text-xl font-bold mb-3 border-b-2 border-gray-600 inline-block pb-1">Find Us:</h4>
          <div className="border-2 border-gray-500 rounded-lg overflow-hidden shadow-md w-72 md:w-[25.3rem]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.858939400785!2d72.54477352394522!3d23.065632564722517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8366d33c3de5%3A0x16fb1ea27975b0dd!2sSATYA%20TWO!5e0!3m2!1sen!2sin!4v1741326970646!5m2!1sen!2sin"
              width="400"
              height="250"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t-2 mb-[-20px] md:mb-0 border-gray-500 pt-4 text-gray-700 font-medium text-sm">
        <p>© 2025 Kalp Investment. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
