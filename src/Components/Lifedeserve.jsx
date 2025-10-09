import React from 'react'
import Button from './Button'

const Lifedeserve = ({ videoSrc, imageSrc }) => {
  return (
    <div className='h-full px-40 w-full grid grid-cols-2'>
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

      {/* RIGHT SIDE */}
      <div className='h-full flex overflow-hidden items-center justify-between flex-col'>
        <div className='w-full flex items-start justify-center text-center'>
          <h3 className='fontspring text-[3.3vw] leading-12 text-[#32140C]'>
            Bloom into the life <br /> you deserve with <br /> Klearmind
          </h3>
        </div>
        <div className='w-full py-1 text-center gap-8 flex items-center justify-center flex-col px-9'>
          <h3 className='figee leading-6 text-[1vw] text-[#413f3f]'>
            Safe, evidence-based Ketamine infusions for psychiatric disorders <br /> 
            and chronic pain management
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <Button 
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              padding="py-2" 
              border="border" 
              hoverEffect={true}
            />
            <Button 
              btn="Am I a candidate?" 
              padding="py-3" 
              border="border-gray-700" 
              hoverEffect={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifedeserve
