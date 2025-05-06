import { useState, useRef, useEffect } from "react";
import LICBanner1 from "../images/scheme.png";
import LICBanner2 from "../images/scheme3.jpeg";
import LICBanner3 from "../images/scheme4.jpeg";
import LICBanner4 from "../images/scheme5.jpg";

const planConfigs = {
  "Lifetime Tax-Free Guaranteed Pension": {
    baseRate: 0.038,
    bonusRate: 0.03,
    minAge: 25,
    maxAge: 55,
    minTerm: 10,
    maxTerm: 20,
    image: LICBanner2,
    features: [
      "💰 Invest ₹1 Lakh per year for 15 years",
      "📈 Get ₹1 Lakh every year after 15 years – Guaranteed till 100 years",
      "🛡️ Risk cover up to ₹1.25 Crore for your family",
      "👨‍👩‍👧‍👦 ₹85 Lakh benefit for your family in case of early demise",
    ],
    note: "✅ Totally Tax-Free returns | 8% Assured | LIC Trust",
  },
  "LIC Nivesh Plus – Single Premium Plan": {
    baseRate: 0.04,
    bonusRate: 0.02,
    minAge: 18,
    maxAge: 65,
    minTerm: 5,
    maxTerm: 10,
    image: LICBanner1,
    features: [
      "📈 Growth Fund NAV on 2/3/2020: ₹10.00",
      "📈 NAV on 2/3/2025: ₹20.05 (📊 NAV doubled in 5 years)",
      "📊 Nifty 50 Performance: 11132 → 22124 (2x in 5 years)",
      "💸 Single Premium: ₹1,25,000 – Just Like a Fixed Deposit",
    ],
    note: "✅ Markets corrected | Ideal time for lump sum investment",
  },
  "LIC Jeevan Labh – Plan No. 736": {
    baseRate: 0.042,
    bonusRate: 0.034,
    minAge: 18,
    maxAge: 45,
    minTerm: 16,
    maxTerm: 25,
    image: LICBanner3,
    features: [
      "📆 Pay for 16 years, relax for 9 years – Maturity at 25 years",
      "📊 Starting daily saving: ₹32 gives ₹5.77 lakh maturity",
      "💼 Total paid: ₹1,84,653 → Maturity: ₹5,77,500 | Profit: ₹3,92,847",
      "🛡️ Insurance coverage: ₹2.2 lakh to ₹16.5 lakh depending on plan",
    ],
    note: "✅ Ideal for age 30 | High returns & risk cover | Trusted LIC Policy",
  },
  "LIC New Jeevan Shanti – Plan No. 758": {
    baseRate: 0.036,
    bonusRate: 0.025,
    minAge: 30,
    maxAge: 79,
    minTerm: 1,
    maxTerm: 5,
    image: LICBanner4,
    features: [
      "🔁 A Single Premium Investment Plan",
      "📆 Deferred Pension (1 to 5 years)",
      "🧓 Entry Age: 30 to 79 years",
      "📊 Guaranteed Annuity Rates: 6.75% to 10.61%",
      "💰 Minimum 105% of Purchase Price on Death",
    ],
    note: "✅ Annuity Rates Revised w.e.f. 01.10.2024 | Ideal for Retirement Planning",
  },
};

const PremiumEstimator = () => {
  const [plan, setPlan] = useState("Lifetime Tax-Free Guaranteed Pension");
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(100000);
  const [term, setTerm] = useState(15);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const resultRef = useRef(null); // Create a reference for the result section

  // Scroll to the result section after state update
  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  const calculatePremium = () => {
    const config = planConfigs[plan];
    setResult(null);
    setLoading(true);  // Start loading

    setTimeout(() => {
      const base = sumAssured * config.baseRate;
      const bonus = sumAssured * config.bonusRate * term;
      const totalPremium = base * term;
      const maturity = sumAssured + bonus;

      setResult({
        annualPremium: base.toFixed(0),
        totalPremium: totalPremium.toFixed(0),
        maturity: maturity.toFixed(0),
      });
      setLoading(false);  // End loading
    }, 2000);  // Simulate delay
  };

  const config = planConfigs[plan];

  return (
    <div className="mt-10 p-6 bg-[#e3e6f3] rounded-lg shadow-lg">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-800 mt-14">
        🧮 <span className="underline">LIC Premium Estimator</span>
      </h3>

      <div className="relative flex justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-6 pb-10 max-w-[90%]">
          <img
            src={config.image}
            alt={plan}
            className="w-[300px] h-[350px] md:w-[300px] md:h-[320px] object-cover rounded-xl shadow-md border border-2 border-gray-600"
          />
          <div className="text-gray-700 space-y-4 w-full">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 pl-[33px] md:pl-0">
              {plan}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-md md:text-lg">
              {config.features.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="text-green-700 font-bold text-md md:text-lg">
              {config.note}
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Select Plan</label>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {Object.keys(planConfigs).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            value={age === 0 ? "" : age}
            min={config.minAge}
            max={config.maxAge}
            onChange={(e) => {
              const val = e.target.value;
              setAge(val === "" ? 0 : Number(val));
            }}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Sum Assured (₹)</label>
          <input
            type="number"
            value={sumAssured}
            onChange={(e) => setSumAssured(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Policy Term (Years)</label>
          <input
            type="number"
            value={term}
            min={config.minTerm}
            max={config.maxTerm}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <button
        onClick={calculatePremium}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Estimate Premium
      </button>

      {/* Loading State */}
      {loading && (
        <div className="mt-4 text-center text-gray-600">
          <span>🔄 Calculating...</span>
        </div>
      )}

      {/* Result Section */}
      {result && !loading && (
        <div ref={resultRef} className="mt-6 text-gray-800 bg-zinc-50 w-1/1 p-4 md:mx-72 rounded border-2 border-blue-300">
          <p>
            📅 Annual Premium: <strong>₹{result.annualPremium}</strong>
          </p>
          <p>
            💸 Total Premium Paid: <strong>₹{result.totalPremium}</strong>
          </p>
          <p>
            🎉 Estimated Maturity Amount: <strong>₹{result.maturity}</strong>
          </p>
          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-600">
            <em>"This is an estimated value. Actual returns depend on LIC’s declared bonuses and terms of the specific policy."</em>
          </p>
        </div>
      )}
    </div>
  );
};

export default PremiumEstimator;
