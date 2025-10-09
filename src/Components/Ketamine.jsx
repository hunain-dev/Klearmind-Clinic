import React from 'react'
const Ketamine = ({heading,text,paragh,image}) => {
  return (
    <div className=' w-full grid grid-cols-1 gap-13'>
        <div className='h-full  flex text-center gap-2 items-center justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  tracking-wide">
            {heading}

            </span>
            </div>
            <h2 className='fontspring text-[#32140C] text-5xl pb-2 mt-2'>{text}
            </h2>
            <h5 className='figee text-[#6F6C6B] text-sm leading-6'>{paragh}
</h5>
        </div>


        <div className='h-full px-39 '>
            <div className='h-full m-auto'>

                <img src={image} alt="" className='h-full rounded-4xl  object-cover' />
            </div>

        </div>
      
    </div>
  )
}

export default Ketamine
