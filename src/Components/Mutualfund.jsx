import React from 'react';
import M1 from "../images/MutualFunds.jpg";
import Scheme1 from "../images/scheme1.jpeg";
import Scheme2 from "../images/scheme2.jpeg";
import Scheme3 from "../images/scheme3.jpeg";

const Mutualfund = () => {
  return (
    <div>
      <div name="Mutual Funds" className="bg-[#e3e6f3] relative md:pt-[6rem] pt-[5rem] md:pb-20 pb-20">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
          <div>
            <p className="text-2xl md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
              Mutual Funds
            </p>
          </div>

          <div className="mt-10 md:pl-16 px-8 md:px-0">
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              📊 Managed Portfolio: ₹10+ Crore (NJ E-Wealth)
            </p>
            <p className="text-md text-gray-600 mt-2">
              Under the expertise of Mr. Kintal Shah, Kalp Investment proudly manages a diversified mutual fund portfolio of ₹10+ crore in association with NJ E-Wealth.
            </p>
          </div>

          <div className="mt-10 bg-yellow-300 text-black px-6 py-4 rounded-xl shadow-lg text-center text-xl md:text-2xl font-bold">
            🚀 Open Your SIP Account Online – <span className="text-red-600 underline">Absolutely FREE!</span>  
            <br />
            📞 <a href="tel:+919898488243" className="text-blue-800 underline">Contact Now-9898488243</a>
          </div>

          <div className="mt-12 md:pl-16 px-8 md:px-0">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              🖼️ Featured Mutual Fund Schemes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img src={Scheme1} alt="Scheme 1" className="w-full h-[350px] object-cover rounded-xl shadow-md" />
              <img src={Scheme2} alt="Scheme 2" className="w-full h-[350px] object-cover rounded-xl shadow-md" />
              <img src={Scheme3} alt="Scheme 3" className="w-full h-[350px] object-cover rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mutualfund;
