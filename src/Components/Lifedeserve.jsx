import React from 'react'
import Button from './Button'

const Lifedeserve = ({ videoSrc, imageSrc }) => {

  
  return (
<div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-40">
{/* LEFT SIDE */}
      <div className='h-full overflow-hidden p-3'>
        {videoSrc ? (
          <video
            src={videoSrc}
            className='h-full w-full rounded-4xl object-cover'
            autoPlay
            loop
            muted
          ></video>
        ) : (
          <img
            src={imageSrc}
            alt="Klearmind"
            className='h-full w-full rounded-4xl object-cover'
          />
        )}
      </div>

      <div className='h-full flex overflow-hidden items-center justify-between flex-col '>
        <div className='w-full flex items-start justify-center text-center'>
        <h3 className="fontspring text-[#32140C] text-[8vw] lg:text-[3.3vw] leading-tight lg:leading-12">
        Bloom into the life <br /> you deserve with <br /> Klearmind
          </h3>
        </div>
        <div className='w-full py-1 text-center gap-8 flex items-center justify-center flex-col lg:px-9 px-0 '>
          <h3 className='figee lg:leading-6 lg:text-[1vw] lg:mt-0 mt-2 text-[3.2vw] leading-7 text-center text-[#413f3f]'>
            Safe, evidence-based Ketamine infusions for psychiatric disorders <br /> 
            and chronic pain management
          </h3>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
            <Button 
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              padding="lg:py-3 py-3 lg:px-6 px-11  " 
              border="border" 
              hoverEffect={true}
              to="https://calendly.com/klearmindclinics"
              
            />
            <Button 
              btn="Am I a candidate?" 
              padding="lg:py-3 py-3" 

              border="border-gray-700" 
              hoverEffect={false}
              to=""
              
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifedeserve
