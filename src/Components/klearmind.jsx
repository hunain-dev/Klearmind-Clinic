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
    <div className=' w-[70%] m-auto grid grid-cols-2 bg-[#FDF9E9] mt-30 p-5'>
        <div className='h-full'>
            <h2 className='figee text-[1vw]'>What is klearmind</h2>
            <h1 className='fontspring text-[2.5vw]'>Is This Right for Me?</h1>

            <div className='grid grid-col-4 gap-5 mt-7 pb-8 '>
            {
                boxes.map((elem,index)=>{
                    return(
                        <div key={index} className='h-[12vh] p-3' style={{backgroundColor:elem.bgcolor}}>
                            <h3 className='figee text-[1.1vw]'>{elem.tittle}</h3>
                            <h2 className='text-[#A4A1A1] text-[1.1vw]'>{elem.desc}</h2>
                        </div>

                    )
                })
            }
            </div>
 
            <Button btn="am i a candidate" padding="py-3 px-9" hoverEffect={false}/>
           
        </div>
        <div className='h-full w-full -mt-15'>
  <img src={flora} className='h-[45vw] w-full object-contain' alt="" />
</div>
      
    </div>
  )
}

export default Klearmind
