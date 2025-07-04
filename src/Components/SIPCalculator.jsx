import { useState, useRef, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const COLORS = ["#3b82f6", "#10b981"]; // Light for Invested, Dark for Returns

const SIPCalculator = () => {
  const [activeTab, setActiveTab] = useState("SIP");

  // Shared State
  const [monthly, setMonthly] = useState(25000);
  const [lumpSum, setLumpSum] = useState(100000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  const resultRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // or 640 for strict mobile only
    if (resultRef.current && isMobile) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [result]);
  

  const calculate = () => {
    setResult(null);
    setLoading(true);

    setTimeout(() => {
      const months = years * 12;
      const monthlyRate = rate / 12 / 100;
      let maturityAmount = 0;
      let totalInvested = 0;

      if (activeTab === "SIP") {
        maturityAmount =
          monthly *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate);
        totalInvested = monthly * months;
      } else {
        maturityAmount = lumpSum * Math.pow(1 + monthlyRate, months);
        totalInvested = lumpSum;
      }

      const estimatedReturns = maturityAmount - totalInvested;

      setResult({
        totalInvested: totalInvested.toFixed(0),
        estimatedReturns: estimatedReturns.toFixed(0),
        maturityAmount: maturityAmount.toFixed(0),
      });

      if (!hasCalculated) setHasCalculated(true); // expand only once
      setLoading(false);
    }, 1500);
  };

  const data = result
    ? [
        { name: "Invested  ", value: parseFloat(result.totalInvested) },
        { name: "Est. returns ", value: parseFloat(result.estimatedReturns) },
      ]
    : [];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
    
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
  return (
    <div className="bg-[#e3e6f3] relative md:pt-[4rem] pt-[5rem]">
      <div
        className={`mt-12 bg-white rounded-lg shadow-xl mx-auto transition-all duration-500 flex flex-col md:flex-row p-6 gap-8 ${
          hasCalculated
            ? " max-w-[21rem] mx-auto md:mr-[5rem] md:ml-[5rem] md:max-w-5xl"
            : " max-w-[20rem] mx-auto lg:mr-[27rem] lg:ml-[25rem] md:mr-[22rem] md:ml-[22rem] md:max-w-md items-center text-center"
        }`}
      >
        {/* Left: Form */}
        <div className="w-full md:w-[360px]">
          <h2 className="text-2xl font-bold mb-4 text-black">
            SIP Calculator
            <i className="fa-solid fa-calculator ml-3"></i>
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-1 rounded-full ${
                activeTab === "SIP"
                  ? "bg-green-100 text-green-600 font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("SIP")}
            >
              SIP
            </button>
            <button
              className={`px-4 py-1 rounded-full ${
                activeTab === "Lumpsum"
                  ? "bg-green-100 text-green-600 font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("Lumpsum")}
            >
              Lumpsum
            </button>
          </div>

          {/* Inputs */}
          {activeTab === "SIP" ? (
            <div className="mb-4">
              <label className="block mb-1 font-medium text-black">
                Monthly investment
              </label>
              <input
                type="range"
                min="500"
                max="100000"
                step={500}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="w-full"
              />
              <div className=" font-bold mt-1 text-black">₹ {monthly}</div>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-1 font-medium text-black">
                Lump sum amount
              </label>
              <input
                type="range"
                min="10000"
                max="5000000"
                step={10000}
                value={lumpSum}
                onChange={(e) => setLumpSum(Number(e.target.value))}
                className="w-full"
              />
              <div className=" font-bold mt-1 text-black">₹ {lumpSum}</div>
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-1 font-medium text-black">
              Expected return rate (p.a)
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full"
            />
            <div className=" font-bold mt-1 text-black">{rate}%</div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-black">
              Time period (years)
            </label>
            <input
              type="range"
              min="1"
              max="40"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full"
            />
            <div className="font-bold mt-1 text-black">{years} Yr</div>
          </div>

          <button
            onClick={calculate}
            disabled={loading}
            className={`mt-0 px-6 py-2 rounded transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>

          {loading && (
            <div className="mt-4 text-center text-gray-600">
              <span>🔄 Calculating...</span>
            </div>
          )}
        </div>

        {/* Right: Result + Chart */}
        {result && (
          <div className="flex-1 flex flex-col justify-start items-center py-6 space-y-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-[-20px]">
              📊 SIP Calculator Summary
            </h3>
            {/* Result Box */}
            <div
              ref={resultRef}
              className="w-full max-w-md text-gray-800 bg-blue-50 p-4 rounded border-2 border-blue-300 space-y-1"
            >
              <p>
                💸 Total Invested Amount:{" "}
                <strong>
                  ₹{Number(result.totalInvested).toLocaleString("en-IN")}
                </strong>
              </p>
              <p>
                📈 Estimated Returns:{" "}
                <strong>
                  <span className="text-green-600">
                    ₹{Number(result.estimatedReturns).toLocaleString("en-IN")}
                  </span>
                </strong>
              </p>
              <p>
                🎯 Maturity Amount:{" "}
                <strong>
                  ₹{Number(result.maturityAmount).toLocaleString("en-IN")}
                </strong>
              </p>
            </div>

            {/* Pie Chart */}
            <div className="w-full max-w-md border-2 border-gray-300 overflow-visible px-2">
  <ResponsiveContainer width="100%" height={350}>
    <PieChart
      margin={{ top: 30, bottom: 20, left: 80, right: 80 }}
    >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={90}
        labelLine={false}
        label={({ name, value, cx, cy, midAngle, outerRadius }) => {
          if (window.innerWidth <= 768) return null; // ❌ No labels on mobile

          const RADIAN = Math.PI / 180;
          const radius = outerRadius + 24;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
          const labelColor = name.includes("Invested")
            ? "#3b82f6"
            : "#10b981";

          return (
            <text
              x={x}
              y={y}
              fill={labelColor}
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              <tspan x={x} dy="-0.6em">{name} :</tspan>
              <tspan x={x} dy="1.2em">
                ₹{value.toLocaleString("en-IN")}
              </tspan>
            </text>
          );
        }}
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      {/* ✅ Tooltip only for desktop */}
      {window.innerWidth > 768 && (
        <Tooltip
          formatter={(value, name) => [
            `₹${value.toLocaleString("en-IN")}`,
            name,
          ]}
        />
      )}

      {/* ✅ Legend: Customized for mobile */}
      <Legend
  verticalAlign="bottom"
  iconSize={14}
  content={({ payload }) => (
    <div className="flex md:flex-row justify-center items-center  gap-2 md:gap-4  mt-2 text-sm font-medium md:text-base">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex flex-row items-center space-x-1">
          <span
            className="inline-block w-4 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span>
            {entry.value}
            {isMobile && `: ₹${data[index]?.value?.toLocaleString("en-IN")}`}
          </span>
        </div>
      ))}
    </div>
  )}
/>



    </PieChart>
  </ResponsiveContainer>
</div>




          </div>
        )}
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-6 mt-20 mb-20 px-4 shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold">
          🚀 Start Your SIP Now with Us!
        </h2>
        <p className="mt-2 text-lg md:text-xl">
          Get <span className="font-semibold">Customized investment plans</span>{" "}
          tailored to your financial goals.
        </p>
        <p className="mt-3 text-md md:text-lg">
          📞 Contact us at{" "}
          <a href="tel:9898488243" className="underline font-medium">
            9898488243
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SIPCalculator;
