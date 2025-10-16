import React from 'react'
const Ketamine = ({heading,text,paragh,image}) => {
  return (
    <div className=' w-full grid grid-cols-1 gap-13'>
        <div className='h-full  flex text-center gap-2 items-center justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] md:text-[2vw] text-[3vw] tracking-wide">
            {heading}

            </span>
            </div>
            <h2 className='fontspring text-[#32140C] lg:text-5xl text-4xl pb-2 lg:mt-2'>{text}
            </h2>
            <h5 className='figee text-[#6F6C6B] lg:text-sm text-[4.8vw] md:text-[1.4vw] lg:leading-6'>{paragh}
</h5>
        </div>


        <div className='h-full lg:px-39 px-4 '>
            <div className='h-full m-auto'>

                <img src={image} alt="" className='lg:h-full h-[46vw] md:h-[35vw]  rounded-4xl  object-cover' />
            </div>

        </div>
      
    </div>
  )
}

export default Ketamine
