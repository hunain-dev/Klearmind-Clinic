import React from 'react';

const ImpactinNumbers = ({ title, subtitle, data, dotColor = "bg-orange-500" }) => {
  return (
    <div className='w-full lg:mt-10 mt-9 grid grid-cols-1'>
      {/* Header Section */}
      <div className='h-full'>
        <div className='flex items-center gap-2 justify-center'>
          <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
          <span className="figee lg:text-[2vh] md:text-[1vh] text-[3vw] text-gray-600 tracking-wide">
            {title}
          </span>
        </div>
        <h2 className='figee text-center lg:text-4xl md:text-3xl text-3xl mt-2 text-[#32140C] font-[400]'>
          {subtitle}
        </h2>
      </div>

      {/* Numbers Section */}
      <div className="lg:mt-14 mt-6 flex flex-col lg:flex-row md:flex-row items-center justify-center lg:gap-40 md:gap-20 gap-6 p-3">
        {data.map((item, index) => (
          <div
            key={index}
            className='h-full flex items-center justify-center flex-col gap-2 text-center'
          >
            <h2 className='fontspringpeachi lg:text-5xl text-4xl text-[#FD862D]'>
              {item.number}
            </h2>
            <h3 className='figee text-[#676362] lg:text-sm text-[4.3vw]'>
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactinNumbers;
