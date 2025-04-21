import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LICBanner1 from "../images/scheme3.jpeg";
import LICBanner2 from "../images/scheme2.jpeg";
import LICBanner3 from "../images/scheme1.jpeg";

const plans = [
  {
    image: LICBanner1,
    title: "🧾 Lifetime Tax-Free Guaranteed Pension",
    features: [
      "💰 Invest ₹1 Lakh per year for 15 years",
      "📈 Get ₹1 Lakh every year after 15 years – Guaranteed till 100 years",
      "🛡️ Risk cover up to ₹1.25 Crore for your family",
      "👨‍👩‍👧‍👦 ₹85 Lakh benefit for your family in case of early demise",
    ],
    note: "✅ Totally Tax-Free returns | 8% Assured | LIC Trust",
  },
  {
    image: LICBanner2,
    title: "🧾 LIC Nivesh Plus – Single Premium Plan",
    features: [
      "📈 Growth Fund NAV on 2/3/2020: ₹10.00",
      "📈 NAV on 2/3/2025: ₹20.05 (📊 NAV doubled in 5 years)",
      "📊 Nifty 50 Performance: 11132 → 22124 (2x in 5 years)",
      "💸 Single Premium: ₹1,25,000 – Just Like a Fixed Deposit",
    ],
    note: "✅ Markets corrected | Ideal time for lump sum investment",
  },
  {
    image: LICBanner3,
    title: "🧾 Retirement Pension Plan",
    features: [
      "🏡 Assured monthly pension post retirement",
      "🔁 Flexible payment terms: single/regular premium",
      "👵 Secure old age with guaranteed life cover",
    ],
    note: "✅ Lifetime Pension | No Tax on Maturity",
  },
];

const LIC = () => {
  return (
    <div>
      <div
        name="LIC Plans"
        className="bg-[#e3e6f3] relative md:pt-[6rem] pt-[5rem] md:pb-20 pb-20"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
          <div>
            <p className="text-2xl md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
              LIC Plans
            </p>
          </div>
          <div className="mt-10 pl-4 md:px-0 relative overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
            >
              {plans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex justify-center">
                    <div className="flex flex-col lg:flex-row items-center gap-6 pb-10 max-w-[90%]">
                      <img
                        src={plan.image}
                        alt={`Plan ${index + 1}`}
                        className="w-full md:w-[400px] h-[300px] object-cover rounded-xl shadow-md"
                      />
                      <div className="text-gray-700 space-y-4 w-full">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-900">
                          {plan.title}
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-md md:text-lg">
                          {plan.features.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                        <p className="text-green-700 font-bold text-md md:text-lg">
                          {plan.note}
                        </p>
                        <a
                          href="tel:+919898488243"
                          className="inline-block mt-4 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white text-lg rounded-full transition-all duration-300 shadow-md"
                        >
                          📞 Contact Now – Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev hidden md:flex !text-black"></div>
              <div className="swiper-button-next hidden md:flex !text-black"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LIC;
