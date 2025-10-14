import React from 'react'
import Button from './Button'
import  { useState } from "react";

const faqs = [
  {
    question: "What conditions does ketamine therapy treat?",
    answer: "Ketamine therapy is used to treat depression, anxiety, PTSD, and chronic pain."
  },
  {
    question: "How does ketamine work?",
    answer: "Ketamine works by targeting NMDA receptors in the brain, creating new neural connections."
  },
  {
    question: "Is ketamine therapy safe?",
    answer: "Yes, when administered in a controlled medical environment, it is considered safe."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions depends on individual conditions, usually 6-8 sessions."
  },
  {
    question: "Will I be conscious during the infusion?",
    answer: "Yes, most patients remain conscious but feel deeply relaxed."
  },
  {
    question: "Can I drive after treatment?",
    answer: "No, patients are advised not to drive until the effects wear off."
  }
];
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className=' w-full grid lg:grid-cols-2 grid-cols-1 lg:px-40 px-0 lg:mt-22 '>
        <div className='h-full p-3'>
        <div className="flex items-start flex-col gap-2 whitespace-nowrap  ">
            <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[2vh] text-gray-600 tracking-wide">
              FAQS
            </span>
            </div>
           
            <h2 className='figee text-4xl font-[400] text-[#361911]'>What our customers <br /> want to know</h2>
            <div className="flex flex-col sm:flex-row lg:gap-2 gap-3 mt-1">
            <Button btn="book an appointment" to="https://calendly.com/klearmindclinics" padding="lg:py-3 lg:px-7 py-3 px-6" bgcolor="#FD8124" textcolor="white"  border="border-none"/>


            <Button btn="Learn more" padding="lg:py-3 lg:px-7 py-3 px-6" hoverEffect={false} textcolor="black" border="border border-black"/>

            </div>
          </div>

        </div>
        <div className='h-full '>
           <div className="lg:py-12 py-9 lg:px-1 px-4">
      <div className="lg:space-y-7 space-y-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 lg:pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="figee flex justify-between items-center">
              <h3 className="lg:text-[1.6vw] text-[4.4vw] text-[#222221FF] ">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 ">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      
    </div>
  )
}

export default Faqs
