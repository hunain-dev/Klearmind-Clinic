import React from 'react'
import Button from './Button'
import flora from "../assets/images/flora.png"
const Klearmind = () => {
    const boxes = [
        {
            bgcolor:"white",
            tittle:"OverWhelmed",
            desc:"Anxiety PTSD - biposar Discorder"
        },
        {
            bgcolor:"white",
            tittle:"OverWhelmed",

            desc:"Dipperession"

        },
        {
            bgcolor:"white",
            tittle:"OverWhelmed",

            desc:"Chronic pain"

        }
    ]
  return (
    <div className=' lg:w-[70%] m-auto grid lg:grid-cols-2 grid-cols-1 bg-[#FDF9E9]  lg:p-5 px-6 lg:py-2 py-3'>
        <div className='h-full'>
        <div className='flex items-center gap-2 justify-start  lg:pb-0 pb-1'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] text-[4vw]  text-gray-600 tracking-wide">
            What Is Klearmind?
            </span>
            </div>            <h1 className='fontspring lg:text-[2.5vw] text-3xl'>Is This Right for Me?</h1>

            <div className='grid lg:grid-col-4 grid-cols-1 lg:gap-5 gap-3 mt-7 lg:pb-8 pb-10 '>
            {
                boxes.map((elem,index)=>{
                    return(
                        <div key={index} className='lg:h-[12vh] h-20 p-3' style={{backgroundColor:elem.bgcolor}}>
                            <h3 className='figee lg:text-[1.1vw] text-[4vw]'>{elem.tittle}</h3>
                            <h2 className='text-[#A4A1A1] lg:text-[1.1vw] text-[3.7vw]'>{elem.desc}</h2>
                        </div>

                    )
                })
            }
            </div>
 
            <Button btn="am i a candidate" padding="py-3 px-9" hoverEffect={false}/>
           
        </div>
        <div className='h-full w-full lg:-mt-15 mt-8'>
  <img src={flora} className='lg:h-[45vw] h-min w-full object-contain' alt="" />
</div>
      
    </div>
  )
}

export default Klearmind
