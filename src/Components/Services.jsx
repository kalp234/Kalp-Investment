import React from "react";
import "../App.css";
import S1 from "../images/S1.png";
import S2 from "../images/S2.jpg";
import S3 from "../images/S3.png";
import S4 from "../images/S4.png";
import S5 from "../images/S5.png";
import S6 from "../images/S6.png";

const Services = () => {
  return (
    <div name="Services" className="bg-[#e3e6f3] relative md:pt-[6rem] pt-[5rem]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
        <div>
          <p className="text-2xl md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
            Services
          </p>
        
        </div>

        <div className="grid  w-full sm:grid-cols-3 gap-8 text-center py-8 px-7 md:px-12 sm:px-0 pt-14 ">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-700 bg-white">
            <img src={S1} alt="" className="h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">LIC Plans</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-red-700 bg-white">
            <img src={S2} alt="" className="h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Mutual Funds</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-orange-500 bg-white">
            <img src={S3} alt="" className="h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Mediclaim</p>
          </div>
         
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-green-500 bg-white">
            <img src={S4} alt="" className="h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Fixed Deposits</p>
          </div>
         
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-900 bg-white">
            <img src={S5} alt="" className="h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Overseas Insurance</p>
          </div>
         
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-700 bg-white">
            <img src={S6} alt="" className="h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Home Insurance</p>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Services;
