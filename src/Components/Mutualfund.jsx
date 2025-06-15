import React from "react";
import { Link } from "react-router-dom"; // ✅ Added for routing
import Scheme1 from "../images/scheme1.jpeg";
import Scheme4 from "../images/scheme13.jpeg";
import Scheme5 from "../images/scheme15.jpeg";
import M1 from "../images/M1.png";
import M2 from "../images/M2.png";
import M3 from "../images/M3.jpg";
import M4 from "../images/M4.jpg";
import M5 from "../images/M5.png";
import M6 from "../images/M6.jpg";
import M7 from "../images/M7.webp";
import M8 from "../images/M8.jpg";

const mutualFundSchemes = [
  {
    image: Scheme1,
    // title: "🏦 Axis Bluechip Fund – Large Cap Equity",
  },
  {
    image: Scheme4,
    // title: "📈 SBI Small Cap Fund – High Growth Potential",
  },
  {
    image: Scheme5,
    // title: "💼 HDFC Balanced Advantage Fund – Hybrid Strategy",
  },
];

const Mutualfund = () => {
  return (
    <div>
      <div
        name="Mutual Funds"
        className="bg-[#e3e6f3] relative md:pt-[6rem] pt-[5rem] md:pb-20 pb-20"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
          <div>
            <p className="text-2xl md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
              Mutual Funds
            </p>
          </div>

          <div className="mt-10 md:pl-16 px-8 md:px-0">
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              📊 Managed Portfolio: ₹10+ Crore
            </p>
            <p className="text-md text-gray-600 mt-2">
              Under the expertise of Mr. Kintal Shah, Kalp Investment proudly
              manages a diversified mutual fund portfolio of ₹10+ crore.
            </p>
          </div>

          <div className="mt-10 bg-yellow-300 text-black px-6 py-4 rounded-xl shadow-lg text-center text-xl md:text-2xl font-bold">
            🚀 Open Your SIP Account Online –{" "}
            <span className="text-red-600 underline">Absolutely FREE!</span>
            <br />
            📞{" "}
            <a href="tel:+919898488243" className="text-blue-800 underline">
              Contact Now-9898488243
            </a>
          </div>

          <div className="mt-12 md:pl-16 px-8 md:px-0">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              📈 Why Invest in Mutual Funds
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {mutualFundSchemes.map((scheme, index) => (
                <div
                  key={index}
                  className="text-center hover:scale-105 duration-500"
                >
                  <img
                    src={scheme.image}
                    alt={`Scheme ${index + 1}`}
                    className="w-[300px] md:w-[400px] h-[350px] object-cover rounded-xl shadow-md"
                  />
                  <p className="mt-3 text-lg font-medium text-gray-700">
                    {scheme.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Tie-ups Section */}
          <div className="mt-16">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
              🤝 Our Mutual Fund Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 justify-items-center px-6">
              {[
                {logo: M1 },
                { logo: M2 },
                { logo: M3 },
                {  logo: M4 },
                {  logo: M5 },
                {  logo: M6 },
                {  logo: M7 },
                {  logo: M8 },
              ].map((company, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md text-center border-2 border-gray-400 w-full max-w-[200px] h-[120px] hover:shadow-lg hover:scale-105 duration-300"
                >
                  <img
                    src={company.logo}
                    className="w-full h-full object-contain p-1"
                  />
            
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-11 text-center text-gray-900 md:text-lg text-sm">
            <p>
              "⚠️ Disclaimer: Mutual funds are subject to market risks. Please
              read the offer document carefully before investing. Past
              performance is not indicative of future results."
            </p>
          </div>

          <div className="mt-12 text-center border-2 border-blue-400 bg-white p-6 md:rounded-full rounded-3xl shadow-md animate-glow md:hover:scale-105 duration-300 md:animate-shake animate-wiggle">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              🎯 Want to estimate your returns?
            </h2>
            <p className="text-md md:text-lg text-gray-700 mt-2">
              Try our easy-to-use SIP Calculator!
            </p>
            <Link
              to="/sip"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition-all duration-300"
            >
              🚀 Check Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mutualfund;
