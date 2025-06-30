import React, { useState } from "react";
import { Link } from "react-router-dom";
import { plans } from "./LIC";

const Chatbot = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const restartChat = () => {
    setAnswers({});
    setStep(0);
  };

  const renderOptions = (options, key) => (
    <div className="flex flex-col gap-2 mt-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(key, option)}
          className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
        >
          {option}
        </button>
      ))}
    </div>
  );

  const renderRestartButton = () => (
    <button
      onClick={restartChat}
      className="mt-4 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
    >
      🔄 Start Again
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            🤖 Hi! I'm <strong>Invest AI</strong>, your smart LIC assistant.{" "}
            <br />
            Let's find the right plan for you. <br />
            <br />
            👤 First, What is your age ?
            {renderOptions(["Below 30", "30–45", "45–60", "60+"], "age")}
          </div>
        );

      case 1:
        return (
          <div>
            📆 What is your investment horizon?
            {renderOptions(
              ["Less than 5 years", "5–10 years", "10+ years"],
              "horizon"
            )}
          </div>
        );

      case 2:
        return (
          <div>
            💸 What is your monthly investment budget?
            {renderOptions(
              ["Below ₹5,000", "₹5,000 – ₹15,000", "₹15,000+"],
              "budget"
            )}
          </div>
        );

      case 3:
        return (
          <div>
            🎯 Finally, what is your primary goal?
            {renderOptions(
              [
                "Long-Term Gain",
                "Short-Term Gain",
                "Tax Saving",
                "Retirement Planning",
                "Child Future Security",
              ],
              "mainGoal"
            )}
          </div>
        );

      case 4:
        const { age, horizon, budget, mainGoal } = answers;

        const recommendedPlans = [];

        if (mainGoal === "Retirement Planning") {
          recommendedPlans.push(plans[0], plans[3]); // Guaranteed Pension & Jeevan Shanti
        } else if (mainGoal === "Tax Saving") {
          recommendedPlans.push(plans[2], plans[5]); // Jeevan Labh & Index Plus
        } else if (mainGoal === "Child Future Security") {
          recommendedPlans.push(plans[2], plans[4]); // Jeevan Labh & Jeevan Utsav
        } else if (mainGoal === "Long-Term Gain") {
          recommendedPlans.push(plans[0], plans[4], plans[5]); // Guaranteed Pension, Utsav, Index Plus
        } else if (mainGoal === "Short-Term Gain") {
          recommendedPlans.push(plans[1], plans[2]); // Nivesh Plus & Jeevan Labh
        }

        return (
          <div>
            ✅ Based on your inputs, here are the best LIC plans for you:
            <br />
            <br />
            <div className="space-y-4 mt-4">
              {recommendedPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                  <h3 className="text-violet-700 font-semibold text-lg mb-2">
                    {plan.title}
                  </h3>
                  <ul className="list-disc pl-5 text-sm mb-2">
                    {plan.features.slice(0, 2).map((feature, fidx) => (
                      <li key={fidx}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-green-600 text-xs font-medium">
                    {plan.note}
                  </p>
                </div>
              ))}
            </div>
            {mainGoal === "Short-Term Gain" && (
              <p className="mt-4 text-indigo-700 text-sm">
                📊 Also try our{" "}
                <Link to="/sip" className="underline font-semibold">
                  SIP Calculator
                </Link>{" "}
                for Mutual Funds!
              </p>
            )}
            <p className="mt-3 text-green-700 font-semibold text-sm">
              📋 Your Input: Age - {age} | Horizon - {horizon} | Budget -{" "}
              {budget} | Goal - {mainGoal}
            </p>
            {renderRestartButton()}
          </div>
        );

      default:
        return (
          <div>
            ✅ Thank you for using Invest AI! Let us know if you need help
            again. 🙌
            {renderRestartButton()}
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {!isOpen ? (
        <div className="relative flex flex-col items-center">
          <span className="mb-1 px-2 py-1 bg-violet-700 text-white text-xs font-medium rounded shadow-lg animate-bounce">
            Invest AI 🤖
          </span>
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bottom-6 rounded-full bg-violet-700 text-white text-xl flex items-center justify-center shadow-md hover:bg-violet-600"
          >
            💬
          </button>
        </div>
      ) : (
        <div className="w-80 h-[450px] bg-white border rounded-lg shadow-xl flex flex-col">
          <div className="flex font-medium justify-between items-center p-3 bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-t-lg">
            <span>Invest AI 🤖</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold"
            >
              ✖
            </button>
          </div>
          <div className="p-4 overflow-y-auto flex-grow text-sm">
            {renderStep()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
