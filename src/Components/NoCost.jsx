import React from 'react'
import Button from './Button'
const NoCost = ({img,pretext,text}) => {
    const nocost = [
        {
            text:"Private Consultation up to 30 Mins"
        },
        {
            text:"Personalized Protocol"
        },
        {
            text:"Consult with Board Certified Physician"
        },
        {
            text:"No obligation, no cost"
        },
        {
            text:"In Person or By Phone"
        }
    ]
  return (
    <div className=' rounded-3xl grid grid-cols-2  w-full bg-[#FDF9E9] overflow-hidden'>
        <div className='h-full p-6'>
        <div className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full  bg-[#FD8124]"></span>
            <span className="figee text-[1.8vh]  text-gray-600 tracking-wide">
           {pretext}

            </span>
            </div>
            <h2 className='figee text-[#34160E] text-4xl mt-2 '>{text}</h2>

            <div className="w-full grid grid-cols-1 gap-8 mt-5 pb-5">
            {
                    nocost.map((elem,index)=>{
                        return(
                            <h2 key={index} className='figee text-sm text-[#56514C]'  >{elem.text}</h2>

                        )
                    })
                }
            </div>
            <Button 
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              padding="py-3" 
              border="border" 
              hoverEffect={true}
            />
        </div>
        <div className='h-ful '>
            <img src={img} alt="" className='h-full  rounded-3xl w-full object-cover' />
        </div>
      
    </div>
  )
}

export default NoCost
