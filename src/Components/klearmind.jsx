import React from 'react'
import Button from './Button'
import flora from "../assets/images/flora.png"
import { Link } from 'react-router-dom'
const Klearmind = () => {
    const boxes = [
        {
            id: 1,
            bgcolor:"white",
            tittle:"OverWhelmed?",
            desc:"Anxiety PTSD - biposar Discorder"
        },
        {
            id: 2,

            bgcolor:"white",
            tittle:"Feeling hopeless?",

            desc:"Dipperession low self esteem"

        },
        {
            id: 3,

            bgcolor:"white",
            tittle:"in constant pain?",

            desc:"Chronic pain"

        }
    ]
  return (
    <div className=' lg:w-[70%] md:w-[95%] m-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 bg-[#FDF9E9]  lg:p-5 px-6 lg:py-2 py-3'>
        <div className='h-full'>
        <div className='flex items-center gap-2 justify-start  lg:pb-0 pb-1'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[2vw] text-[4vw]  text-gray-600 tracking-wide">
            What Is Klearmind?
            </span>
            </div>           
             <h1 className='fontspring lg:text-[2.5vw] text-3xl md:text-[3vw]'>Is This Right for Me?</h1>

            <div className='grid lg:grid-col-4 grid-cols-1 lg:gap-5 gap-3 mt-7 lg:pb-8 pb-10 '>
            {
                boxes.map((elem,index)=>{
                    return(
                        <Link key={index} to={`/klearmind/${elem.id}`}>
                        <div
                          className="lg:h-[12vh] h-20 p-3 hover:scale-105 transition"
                          style={{ backgroundColor: elem.bgcolor }}
                        >
                          <h3 className="figee lg:text-[1.1vw] text-[4vw] md:text-[2vw]">{elem.tittle}</h3>
                          <h2 className="text-[#A4A1A1] lg:text-[1.1vw] md:text-[2vw] text-[3.7vw]">{elem.desc}</h2>
                        </div>
                      </Link>
                      

                    )
                })
            }
            </div>
 
            <Button btn="am i a candidate" padding="py-3 px-9 " hoverEffect={false}/>
           
        </div>
        <div className='h-full w-full lg:-mt-15 mt-8'>
  <img src={flora} className='lg:h-[45vw] md:h-[52vw] h-full w-full object-contain' alt="" />
</div>
      
    </div>
  )
}

export default Klearmind
