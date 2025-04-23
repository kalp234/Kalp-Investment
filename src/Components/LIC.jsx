import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LICBanner1 from "../images/scheme3.jpeg";
import LICBanner2 from "../images/scheme.png";
import LICBanner3 from "../images/scheme4.jpeg";
import LICBanner4 from "../images/scheme5.jpeg";

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
    image: LICBanner3, // Replace with Jeevan Labh plan image if available
    title: "🧾 LIC Jeevan Labh – Plan No. 736",
    features: [
      "📆 Pay for 16 years, relax for 9 years – Maturity at 25 years",
      "📊 Starting daily saving: ₹32 gives ₹5.77 lakh maturity",
      "💼 Total paid: ₹1,84,653 → Maturity: ₹5,77,500 | Profit: ₹3,92,847",
      "🛡️ Insurance coverage: ₹2.2 lakh to ₹16.5 lakh depending on plan",
      // "📈 Higher daily savings → Up to ₹43.31 lakh maturity",
    ],
    note: "✅ Ideal for age 30 | High returns & risk cover | Trusted LIC Policy",
  },
  {
    image: LICBanner4,
    title: "🧾 LIC New Jeevan Shanti – Plan No. 758",
    features: [
      "🔁 A Single Premium Investment Plan",
      "📆 Deferred Pension (1 to 5 years)",
      "🧓 Entry Age: 30 to 79 years",
      "📊 Guaranteed Annuity Rates: 6.75% to 10.61%",
      // "👫 Choice of Single or Joint Life Pension",
      // "👨‍👩‍👧 Same Pension for the second life too",
      "💰 Minimum 105% of Purchase Price on Death",
      // "📈 Extra 0.15% annuity rate for existing policyholders",
    ],
    note: "✅ Annuity Rates Revised w.e.f. 01.10.2024 | Ideal for Retirement Planning",
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
          <div className="mt-10 pl-1 md:pl-4 md:px-0 relative overflow-hidden">
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
                        className="w-[300px]  h-[350px] md:w-[400px] md:h-[390px] object-cover rounded-xl shadow-md"
                      />
                      <div className="text-gray-700 space-y-4 w-full">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-900 pl-[33px] md:pl-0">
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
