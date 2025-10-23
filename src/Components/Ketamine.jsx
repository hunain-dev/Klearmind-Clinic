import React from 'react'
const Ketamine = ({heading,text,paragh,image,customClass}) => {
  return (
    <div className=' w-full grid grid-cols-1 lg:gap-13 gap-4'>
        <div className='h-full  flex text-center gap-2 items-center justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] md:text-[1.4vw] text-[3vw] tracking-wide">
            {heading}

            </span>
            </div>
            <h2 className={`fontspring text-[#32140C] lg:text-5xl text-[7vw] lg:leading-12 leading-8 md:text-[4.3vw] pb-2 lg:mt-2 ${customClass}`}>
  {text}
</h2>
            <h5 className='figee text-[#6F6C6B] lg:text-sm text-[4.1vw] md:text-[1.4vw] lg:leading-6'>{paragh}
</h5>
        </div>


        <div className='h-full lg:px-39 px-4 '>
            <div className='h-full m-auto'>

                <img src={image} alt="" className='lg:h-full  md:h-[35vw]  h-[26vh] w-full lg:rounded-4xl rounded-3xl  object-cover' />
            </div>

        </div>
      
    </div>
  )
}

export default Ketamine
