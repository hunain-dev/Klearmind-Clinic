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
    <div className=' w-full grid grid-cols-1 mt-20 pb-30'>
      <div className='h-full flex items-center justify- gap-2 flex-col'>
        <div className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  tracking-wide">
            Therapy Pairing


            </span>
            </div>
            <h2 className='figee text-[#32140C] text-4xl mt-1' >Ketamine & Psychotherapy

            </h2>
            <p className='figee text-[#433F3F] text-sm text-center'>When combined with talk therapy, ketamine can unlock <br />
            new insights and emotional clarity.</p>
            <div className='mt-5'>
            <Button  btn="Learn more" padding="py-3 px-9" hoverEffect={false}/>

            </div>
        </div>

  
      <div className='h-full  flex items-center justify-center gap-10 mt-10 '>
      {
          Psychotherapyobj.map((elem,index)=>{
            return(
        <img key={index} src={elem.img} className='h-[13vw] object-contain' alt="" />
               
            )
          })
        }
        

      </div>
      <div className='h-full  mt-9 flex items-center justify-center gap-4'>
      <Button  btn="Schedule A  consultation" padding="py-3 px-8" bgcolor="#FD8124" textcolor="white"/>
      <Button  btn="Oral Ketamine Prescription Renewal" padding="py-3 px-8" hoverEffect={false}/>

      </div>
      
    </div>
  )
}

export default Psychotherapy
