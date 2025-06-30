import React, { useEffect, useRef, useState } from "react";
import { plans } from "./LIC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Chatbot = ({ isOpen, setIsOpen }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && step === 0 && chatHistory.length === 0) {
      sendBotMessages([
        "👋 Hello! I'm Invest AI, your smart LIC assistant.",
        "🤖 What's your name?",
      ]);
    }
    scrollToBottom();
  }, [isOpen, step, chatHistory.length]);

  const scrollToBottom = () => {
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const addBotMessage = (text) => {
    setChatHistory((prev) => [...prev, { type: "bot", text }]);
  };

  const addUserMessage = (text) => {
    setChatHistory((prev) => [...prev, { type: "user", text }]);
  };

  const sendBotMessages = async (messages, delay = 800) => {
    for (let msg of messages) {
      await new Promise((res) => setTimeout(res, delay));
      addBotMessage(msg);
    }
  };

  const handleNameSubmit = () => {
    const name = nameInput.trim();
    if (!name) return;
    addUserMessage(name);
    setAnswers((prev) => ({ ...prev, name }));
    setNameInput("");

    sendBotMessages([
      `🙌 Welcome, ${name}! Let's find the right LIC plan for you.`,
      "🤵 What is your age?",
    ]);
    setStep(1);
  };

  const handleOptionClick = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    addUserMessage(value);
    proceedToNextStep(key, value);
  };

  const proceedToNextStep = (key, value) => {
    const nextStep = step + 1;

    if (step === 1) {
      sendBotMessages(["📆 What is your investment horizon?"]);
    } else if (step === 2) {
      sendBotMessages(["💸 What is your monthly investment budget?"]);
    } else if (step === 3) {
      sendBotMessages(["🎯 Finally, what is your primary goal?"]);
    } else if (step === 4) {
      showRecommendations({ ...answers, [key]: value });
      setStep(nextStep);
      return;
    }

    setStep(nextStep);
  };

  const restartChat = () => {
    setChatHistory([]);
    setAnswers({});
    setStep(0);
    setNameInput("");
  };

  const showRecommendations = async (allAnswers) => {
    const { age, horizon, budget, mainGoal } = allAnswers;
    const recommendedPlans = [];

    if (mainGoal === "Retirement Planning") {
      recommendedPlans.push(plans[0], plans[3]);
    } else if (mainGoal === "Tax Saving") {
      recommendedPlans.push(plans[2], plans[5]);
    } else if (mainGoal === "Child Future Security") {
      recommendedPlans.push(plans[2], plans[4]);
    } else if (mainGoal === "Long-Term Gain") {
      recommendedPlans.push(plans[0], plans[4], plans[5]);
    } else if (mainGoal === "Short-Term Gain") {
      recommendedPlans.push(plans[1], plans[2]);
    }

    const messages = [
      "✅ Based on your inputs, here are the recommended LIC plans for you:"
    ];

    for (let plan of recommendedPlans) {
      messages.push(
        `📌 *${plan.title}*\n\n🔹 ${plan.features[0]}\n🔹 ${plan.features[1]}\n\n📘 ${plan.note}`
      );
    }

    if (mainGoal === "Short-Term Gain") {
      messages.push("📊 For better short-term results, you can also try our SIP Calculator.");
    }

    messages.push(`📋 *Your Inputs:*\n- Age: ${age}\n- Horizon: ${horizon}\n- Budget: ${budget}\n- Goal: ${mainGoal}`);

    await sendBotMessages(messages, 900);

    if (mainGoal === "Short-Term Gain") {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          text: (
            <Link to="/sip" className="text-indigo-600 underline font-semibold">
              👉 Go to SIP Calculator
            </Link>
          ),
        },
      ]);
    }
  };

  const getOptionsForStep = () => {
    switch (step) {
      case 1:
        return ["Below 30", "30–45", "45–60", "60+"];
      case 2:
        return ["Less than 5 years", "5–10 years", "10+ years"];
      case 3:
        return ["Below ₹5,000", "₹5,000 – ₹15,000", "₹15,000+"];
      case 4:
        return [
          "Long-Term Gain",
          "Short-Term Gain",
          "Tax Saving",
          "Retirement Planning",
          "Child Future Security",
        ];
      default:
        return [];
    }
  };

  return (
    <div className="fixed bottom-4 right-2 md:right-4 z-[60]">
      {!isOpen ? (
        <div className="relative flex flex-col items-center">
          <span className="mb-1 px-2 py-1 bg-violet-700 text-white text-xs font-medium rounded shadow-lg animate-bounce">
            Invest AI <FontAwesomeIcon icon={faRobot} />
          </span>
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-violet-700 text-white text-xl flex items-center justify-center shadow-md hover:bg-violet-600"
          >
            💬
          </button>
        </div>
      ) : (
        <div className="w-[90vw] max-w-xs h-[75vh] sm:w-80 sm:h-[450px] bg-white border rounded-lg shadow-xl flex flex-col">
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-t-lg">
            <span className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faRobot} />
              Invest AI
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold"
            >
              ✖
            </button>
          </div>

          <div className="p-3 overflow-y-auto flex-grow space-y-2 text-sm">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-lg shadow-sm ${
                    msg.type === "bot" ? "bg-gray-100 text-gray-800" : "bg-violet-600 text-white"
                  } whitespace-pre-line`}
                >
                  {typeof msg.text === "string" ? msg.text : msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {step === 0 && (
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your name"
                className="flex-grow border px-3 py-2 rounded text-sm"
              />
              <button
                onClick={handleNameSubmit}
                className="bg-violet-600 text-white px-3 py-2 rounded text-sm hover:bg-violet-700"
              >
                Send
              </button>
            </div>
          )}

          {step >= 1 && step <= 4 && (
            <div className="p-3 border-t grid grid-cols-2 gap-2">
              {getOptionsForStep().map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(["age", "horizon", "budget", "mainGoal"][step - 1], option)}
                  className="bg-violet-600 text-white text-xs px-2 py-2 rounded hover:bg-violet-700 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {step > 4 && (
            <div className="p-3 border-t">
              <button
                onClick={restartChat}
                className="w-full bg-violet-600 text-white text-sm px-4 py-2 rounded hover:bg-violet-700"
              >
                🔄 Start Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
