import React from 'react'
import Button from '../../Components/Button'

const Psychotherapy = () => {

  const Psychotherapyobj = [
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838070c3f6fe4cdf7bab760_Frame%201410133877.avif"
    },
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838070c182624f3234a7bf1_Frame%201410133878.avif"
    },
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838070c3cf69a966dea7ac3_Frame%201410133879.avif"
    }
  ]
  return (
    <div className=' w-full grid grid-cols-1 lg:mt-20 mt-10 lg:pb-30 pb-12'>
      <div className='h-full flex items-center justify- gap-2 flex-col'>
        <div className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] text-[3.3vw]  tracking-wide">
            Therapy Pairing


            </span>
            </div>
            <h2 className='figee text-[#32140C]  text-center lg:text-4xl text-3xl mt-1' >Ketamine & Psychotherapy

            </h2>
            <p className='figee text-[#433F3F] text-[3.7vw] lg:text-sm text-center'>When combined with talk therapy, ketamine can unlock <br />
            new insights and emotional clarity.</p>
            <div className='lg:mt-5 mt-3'>
            <Button  btn="Learn more" padding=" py-3 px-9" hoverEffect={false}/>

            </div>
        </div>

  
        <div className="h-full flex flex-col sm:flex-row items-center justify-center lg:gap-6 sm:gap-10 mt-5 sm:mt-10">
        {
          Psychotherapyobj.map((elem,index)=>{
            return(
        <img key={index} src={elem.img} className='lg:h-[13vw] h-[28vw] object-contain' alt="" />
               
            )
          })
        }
        

      </div>
      <div className="h-full flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-3 sm:gap-6 mt-2 sm:mt-9">
      <Button  btn="Schedule A  consultation" to="https://calendly.com/klearmind/consultation-with-board-certified-physician?month=2025-08" padding="py-3 px-8" bgcolor="#FD8124" textcolor="white"/>
      <Button  btn="Oral Ketamine Prescription Renewal" to="https://checkout.square.site/merchant/MLTA69W3FWH1D/checkout/E7O4RL7HFUC4XTO7A2F6ACXV" padding="py-3 px-8" hoverEffect={false}/>

      </div>
      
    </div>
  )
}

export default Psychotherapy
