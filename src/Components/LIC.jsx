import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LICBanner1 from "../images/scheme3.jpeg";
import LICBanner2 from "../images/scheme.png";
import LICBanner3 from "../images/scheme4.jpeg";
import LICBanner4 from "../images/scheme5.jpg";
import LICBanner5 from "../images/scheme6.jpeg";
import LICBanner6 from "../images/scheme8.jpeg";


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
    title: "🧾 LIC Jeevan Labh – Plan No. 736",
    features: [
      "📆 Pay for 16 years, relax for 9 years – Maturity at 25 years",
      "📊 Starting daily saving: ₹32 gives ₹5.77 lakh maturity",
      "💼 Total paid: ₹1,84,653 → Maturity: ₹5,77,500 | Profit: ₹3,92,847",
      "🛡️ Insurance coverage: ₹2.2 lakh to ₹16.5 lakh depending on plan",
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
      "💰 Minimum 105% of Purchase Price on Death",
    ],
    note: "✅ Annuity Rates Revised w.e.f. 01.10.2024 | Ideal for Retirement Planning",
  },
  {
    image: LICBanner5,
    title: "🧾 LIC Jeevan Utsav – Plan No. 871",
    features: [
      "💸 Limited Premium Payment – Lifetime Benefits",
      "🎯 Choice of Income or Flexi Benefit Options",
      "🧓 Entry Age: 90 days to 65 years",
      "📆 Premium Payment Term: 5 to 16 years",
      "📈 Guaranteed Additions: ₹50 per ₹1,000 SA (1st 5 years)",
    ],
    note: "✅ Whole Life Income Plan | Ideal for Long-Term Financial Planning & Legacy Building",
  },
  
  {
    image: LICBanner6,
    title: "📊 LIC Index Plus – Plan No. 873",
    features: [
      "💼 Unit Linked, Non-Participating, Regular Premium Plan",
      "📈 Index Fund-Based Returns (Flexi Cap & Index Funds)",
      "🔁 Loyalty Additions from 6th Policy Year",
      "🧒 Entry Age: 90 days to 60 years",
      "💰 Partial Withdrawals Allowed after 5 Years",
    ],
    note: "✅ Ideal for Market-Linked Long-Term Wealth Creation | Tax Benefits under 80C & 10(10D)",
  },
];

const LIC = () => {
  return (
    <div>
      <div
        name="LIC Plans" id="LIC Plans"
        className="bg-[#e3e6f3] relative md:pt-[5rem] pt-[4.5rem] md:pb-20 pb-20"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
          <div>
            <p className="text-2xl md:text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
              LIC Plans
            </p>
          </div>
          <div className="mt-10 pl-1 md:pl-4 md:px-0 relative overflow-hidden">
            <p className="md:hidden text-center text-md text-gray-800 mb-4 animate-slide-left">
              👉 Swipe left to view more plans<span className="ml-1 text-lg">»»</span>
            </p>
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
                        className="w-[300px] h-[350px] md:w-[400px] md:h-[390px] object-cover rounded-xl shadow-md border border-2 border-gray-600"
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

 {/* Promo Banner */}
{/* <div
  className="mt-12 text-center border-2 border-blue-400 bg-white p-6 md:rounded-full rounded-3xl shadow-md animate-glow md:hover:scale-105 duration-300 md:animate-shake animate-wiggle"
>
  <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
    🎯 Want to estimate your returns?
  </h2>
  <p className="text-md md:text-lg text-gray-700 mt-2">
    Try our easy-to-use LIC Premium Estimator and plan better!
  </p>
  <Link
              to="/premium"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition-all duration-300"
            >
              🚀 Check Now
            </Link>
</div> */}


        </div>
      </div>
    </div>
  );
};

export default LIC;
