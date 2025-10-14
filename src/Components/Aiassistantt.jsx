import React, { useState } from "react";
import ai from "../assets/images/AI.PNG";
import Button from "../Components/Button.jsx";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";

const Aiassistantt = () => {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! i'am klearmind clinic Assistant 👋 How can I help?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { from: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    // Fixed reply (always same)
    const botReply = `Thank you for reaching out! At KlearMind Clinics, we offer personalized mental health and wellness treatments including ketamine infusion therapy for conditions like depression, anxiety, PTSD, and chronic fatigue. We also provide wellness infusions designed to support energy, recovery, immunity, and overall vitality.

Here’s how I can assist you today:
✅ Help you understand our treatment options and how they might benefit you  
✅ Guide you through the process of scheduling a consultation or appointment  
✅ Provide information about our team and approach to care  
✅ Answer questions about insurance, including Veterans Affairs benefits  
✅ Support you with any other inquiries related to your mental health and wellness journey

Feel free to ask any specific questions or let me know how I can support you!  
You can also book an appointment directly here:  
📅 Book an Appointment for Wellness  
📞 Or call us at (916) 900-6686.`;

    // Bot reply after short delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 600);
  };

  return (
<div
  className="fixed rounded-3xl bottom-4 right-4 z-[99] flex flex-col items-end justify-end"
  onWheel={(e) => e.stopPropagation()} // 👈 Prevent window scroll
>
      {/* Main Panel */}
      {open && !chatOpen && (
        <div className="lg:w-[26.6667vw] lg:max-h-[34.8333vw]    w-[93vw]  bg-gradient-to-b from-orange-100 to-white rounded-2xl shadow-2xl p-4 mb-4 transition-all duration-500">
          <div className="flex justify-end items-start mb-3">
            <button
              className="text-gray-600 cursor-pointer hover:text-black text-3xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="w-full">
            <img
              src={ai}
              alt="AI Assistant"
              className="lg:h-[9.4vh] lg:w-[9.4vh] h-[8vh] w-[8vh] rounded-full object-cover"
              />
            <h2 className="fontspring font-[550] text-4xl mt-3">
              Welcome to <br /> KlearMind
            </h2>
          </div>

          <div className="bg-white rounded-xl mt-7 p-3 shadow-inner pb-7 overflow-y-auto">
            <p className="figee text-gray-700 text-sm">
              👋 Hello! How may I help you today?
            </p>
          </div>

          <div className="m-auto flex items-center justify-center">
            <Button
              onClick={() => setChatOpen(true)}
              btn="Let's chat"
              bgcolor="#FD8124"
              textcolor="white"
              padding="py-3 px-25"
              border="border"
              hoverEffect={false}
              fontSize="lg:text-[1.1vw] text-[4vw]"
            />
          </div>
        </div>
      )}

      {/* Chat Window */}
      {open && chatOpen && (
        <div className="lg:w-[26.6667vw] lg:max-h-[34.8333vw]  h-[120vw] w-[93vw]  bg-gradient-to-b from-orange-100 to-white rounded-2xl shadow-2xl p-4 mb-4 transition-all duration-500">

        <div className="flex justify-between items-start mb-3">

        <button
              className="text-gray-600 cursor-pointer hover:text-black text-2xl"
              onClick={() => setChatOpen(false)}
            >
           <RiArrowGoBackFill />

            </button>
            <button
              className="text-gray-600 cursor-pointer hover:text-black text-3xl"
              onClick={() => setOpen(false)}
            >
              <AiOutlineMinus />

            </button>
          
          </div>

          {/* Messages Section */}
          <div
            id="chat-container"
         className="bg-gray-100 rounded-xl p-3 shadow-inner h-[70%] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.from === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-orange-400 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full p-2 text-sm outline-none focus:border-orange-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-orange-400 text-white px-4 py-2 rounded-xl hover:bg-orange-500"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating AI Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer pointer-events-auto"
      >
        <img
          src={ai}
          alt="AI Assistant"
          className="lg:h-[9.4vh] lg:w-[9.4vh] h-[8vh] w-[8vh] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Aiassistantt;
