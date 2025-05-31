import React from "react";
import "../App.css";
import K1 from "../images/K1.jpg";

const Aboutus = () => {
  return (
    <div
      name="About"
      className="bg-[#e3e6f3] relative lg:pt-[3.9rem] pt-[6rem]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full min-h-screen">
        <div className="text-left">
          <p className="md:text-4xl text-3xl font-bold p-2 border-b-4 border-gray-500 inline ">
            About Us
          </p>
        
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse md:-mt-5 mt-7 gap-8">
          <img
            src={K1}
            className="md:max-w-lg rounded-3xl shadow-2xl md:h-[28rem]"
            alt="About Us"
          />
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-black">
              "Invest Now, Relax Later"
            </h1>
            <h3 className="text-3xl pt-3  md:text-3xl md:text-right font-bold italic text-red-700 pb-4">
              - Kintal Shah
            </h3>
            <p className="py-6 max-w-2xl text-gray-900 text-start font-normal">
  "With years of expertise in the insurance industry, Kintal Shah is a dedicated and trusted advisor at <span className="font-extrabold italic underline text-green-700">Kalp Investment</span>. His deep understanding of financial planning and risk management enables him to provide tailored insurance solutions that secure the future of individuals and families. Committed to excellence and client satisfaction, he believes in guiding people toward informed decisions, ensuring their financial well-being and peace of mind."
</p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Aboutus;
