import React from 'react'
import Ketamine from '../../Components/Ketamine'
import sleep from "../../assets/images/sleep.png" 
import IVInfusions from './IVInfusions'
import VitaminIV from './VitaminIV'
import Ourmission from './Ourmission'
import Invest from './Invest'
import Testimonial from '../../Components/Testimonial'
import Faqs from '../../Components/Faqs.JSX'
import smiling from "../../assets/images/smiling.png"
const Wellnesthraypy = () => {
  return (
    <div className='w-full py-33 relative'>
<Ketamine heading="Treatment Overview" text="What is Wellness Therapy?" paragh={<>
  Biological wellness is about helping you feel your best. Our IV hydration and therapy <br /> support mood, energy, and recovery-whether you're run down, dehydrated, or just<br /> need a boost. Each infusion is tailored to your unique needs.

        
        </>} 
        
        image={sleep} />     

        <IVInfusions/> 
        <VitaminIV/> 
        <Ourmission/> 
        <Invest/> 
        <Testimonial img={smiling}/> 
        <Faqs/> 
    </div>
  )
}

export default Wellnesthraypy
