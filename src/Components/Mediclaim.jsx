import React from "react";
import { Link } from "react-router-dom";
import I1 from "../images/I1.png";
import I2 from "../images/I2.png";
import I3 from "../images/I3.jpg";
import I4 from "../images/I4.png";
import I5 from "../images/I5.jpeg";



const mediclaimCompanies = [
  { logo: I1 },
  { logo:  I2},
  { logo: I3},
  { logo:  I4},
  { logo:  I5},
 
];

const Mediclaim = () => {
  return (
    <div name="Mediclaim" id="Mediclaim" className="bg-[#e3e6f3] relative md:pt-[5rem] pt-[4.5rem] md:pb-20 pb-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
        <div>
          <p className="text-2xl md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
            Mediclaim
          </p>
        </div>

        <div className="mt-10 md:pl-16 px-8 md:px-0">
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            🏥 Trusted Insurance Services for Your Health
          </p>
          <p className="text-md text-gray-700 mt-2">
            At Kalp Investment, we ensure you and your family are financially
            protected during medical emergencies. We work with the most
            reliable health insurance providers in India.
          </p>
        </div>

        <div className="mt-12 md:flex md:items-start md:justify-between md:px-16 px-6 gap-6">
  {/* Left: Why Choose Mediclaim */}
  <div className="flex-1">
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
      💡 Why Choose Mediclaim?
    </h3>
    <ul className="list-disc text-gray-700 space-y-2 pl-6">
      <li>Cashless hospital network across India</li>
      <li>Tax benefits under Section 80D</li>
      <li>Comprehensive family and individual coverage</li>
      <li>Affordable premiums with maximum protection</li>
      <li>Dedicated support for claims and renewals</li>
    </ul>
  </div>

  {/* Right: Banner Box */}
  <div className="mt-8 md:mt-0 w-full md:w-[350px] h-[220px] bg-green-500 text-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center hover:scale-105 duration-300">
  <p className="text-2xl font-bold mb-2">
    ✅ Buy Health Insurance
  </p>
  <p className="text-white font-medium text-sm tracking-wide">
    100% Genuine & Unbiased Advice
  </p>
  <div className="mt-5">
    <p className="text-lg font-semibold mb-1">📞 Instant Assistance</p>
    <a
      href="tel:+919898488243"
      className="inline-block bg-white text-green-600 font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition"
    >
      Call Now - 9898488243
    </a>
  </div>
</div>

</div>


        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
            🛡️ Our Insurance Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 justify-items-center px-6">
            {mediclaimCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-400 shadow-md text-center w-full max-w-[200px] h-[120px] hover:shadow-lg hover:scale-105 duration-300"
              >
                <img
                  src={company.logo}
                  className="w-full h-full object-contain p-2"
                  alt="Insurance Partner"
                />
              </div>
            ))}
          </div>
        </div>

      

        <div className="mt-12 text-center border-2 border-green-400 bg-white p-6 md:rounded-full rounded-3xl shadow-md animate-glow md:hover:scale-105 duration-300 md:animate-shake animate-wiggle">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            🧮 Need Help Choosing a Policy?
          </h2>
          <p className="text-md md:text-lg text-gray-700 mt-2">
            Contact us now and we’ll guide you to the best plan for your needs.
          </p>
          <a
            href="tel:9898488243"
            className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg rounded-full transition-all duration-300"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mediclaim;
