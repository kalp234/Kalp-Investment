import React from "react";
import "../App.css";
import S1 from "../images/S1.png";
import S2 from "../images/S2.jpg";
import S3 from "../images/S3.png";
import S4 from "../images/S4.png";
import S5 from "../images/S5.png";
import S6 from "../images/S6.png";
import S7 from "../images/car.jpg";
import S8 from "../images/post.jpg";
import S9 from "../images/accident.jpg";

const Services = () => {
  return (
    <div name="Services" className="bg-[#e3e6f3] relative md:pt-[5rem] pt-[4.5rem]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
        <div>
          <p className="text-2xl text-black md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
            Services
          </p>
        
        </div>

        <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  md:px-12 px-3 pt-14 text-black">

          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-700 bg-white">
            <img src={S1} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">LIC Plans</p>
          </div>
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-[#ffc946] bg-white">
            <img src={S2} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Mutual Funds</p>
          </div>
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-orange-500 bg-white">
            <img src={S3} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Mediclaim</p>
          </div>
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-red-500 bg-white">
            <img src={S9} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Personal Accident</p>
          </div>
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-900 bg-white">
            <img src={S5} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Travel Insurance</p>
          </div>
         
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-700 bg-white">
            <img src={S6} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Home Insurance</p>
          </div>
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-700 bg-white">
            <img src={S7} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Car Insurance</p>
          </div>
       
     
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-green-500 bg-white">
            <img src={S4} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Fixed Deposits</p>
          </div>
          <div className="shadow-md hover:scale-105 h-[180px] w-[140px] md:w-full md:h-full duration-500 py-2 rounded-lg items-center flex flex-col shadow-red-700 bg-white">
            <img src={S8} alt="" className="h-28 md:h-44 w-56 bg-transparent" />
            <p className="mt-4 font-semibold">Post Office Schemes</p>
          </div>
        
         
         
        </div>
      </div>
    </div>
  );
};

export default Services;
