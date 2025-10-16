import React from 'react'

const ImpactinNumbers = () => {
  const numebrs  = [
    {
      number:"30+",
      text: (
        <>
          Years of combined <br /> Experience
        </>
      )
    },
    {
        number:"92+",
        text: (
          <>
         Patients report
         <br />feeling relief

          </>
        )
      },
      {
        number:"100+",
        text: (
          <>
            Successful <br /> infusions
          </>
        )
      }
  ]
  return (
    <div className='w-full mt-10 grid grid-cols-1'>
      <div className='h-full'>
        <div className='flex items-center gap-2 justify-center'>
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="figee lg:text-[2vh] md:text-[1vh] text-[3vw] text-gray-600 tracking-wide">
            Impact in Numbers
          </span>
        </div>
        <h2 className='figee text-center lg:text-4xl md:text-3xl text-4xl mt-2 text-[#32140C] font-[400]'>
          One Goal <br />
          To help you feel whole again
        </h2>
      </div>

      <div className="lg:mt-14 mt-10 flex flex-col lg:flex-row md:flex-row items-center justify-center lg:gap-40 md:gap-20  gap-6 p-3">
      {numebrs.map((elem, index) => (
          <div key={index} className='h-full flex items-center justify-center flex-col gap-2 text-center'>
            <h2 className='fontspringpeachi lg:text-5xl text-3xl text-[#FD862D]'>{elem.number}</h2>
            <h3 className='figee text-[#676362] lg:text-sm text-1xl'>
              {elem.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImpactinNumbers
