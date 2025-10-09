import React from 'react'

const Ourmission = () => {
  return (
    <div className='h-full w-full mt-15 px-40 '>
        <div  className='h-full rounded-4xl w-full overflow-hidden bg-[#FDF9E9] grid grid-cols-2'>
            <div className='h-full  px-7 py-7'>
            <div className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  text-gray-600 tracking-wide">
            Our Mission
            </span>
            </div>
            <h3 className='figee text-4xl text-[#32140C] mt-9'>At Home IV Therapy
            </h3>
            <h4 className='figee text-[#55504C] mt-7 text-[1.2vw]'>Please note, an additional $75 fee (within 10 miles) applies for in-home services.</h4>
           

            </div>
            <div className='relative flex items-end justify-end overflow-hidden h-[38vh] w-full '>
  <img 
    src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68359bb34e245d44a0b9da18_ChatGPT%20Image%20Apr%2024%2C%202025%2C%2001_03_38%20PM%202.avif" 
    alt="" 
    className='absolute left-73 bottom-0 w-[32vw] h-[19vw] object-cover'
  />
</div>

        </div>
      
    </div>
  )
}

export default Ourmission
