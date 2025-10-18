import React from 'react'
import Ketamine from '../../Components/Ketamine'
import Therapy from './Therapy'
import Klearmind from '../../Components/klearmind'
import FormsofTreatment from './FormsofTreatment'
import Trustedcommuntiy from '../../Components/trustedcommuntiy'
import Faqs from '../../Components/Faqs.JSX'
import Psychotherapy from './Psychotherapy'
import Lifedeserve from '../../Components/Lifedeserve'
import therapyImg from "../../assets/images/mankids.png"

import fact from "../../assets/images/fact.png" 
import Loader from '../../Components/Loader'

const Ketaminetherapy = () => {

  
  return (
    <div className=' w-full lg:py-33 py-20  '>
      <Loader/>
      <Ketamine heading="Treatment Overview" text="What is Ketamine?" paragh={<>
      Ketamine is an FDA-approved anesthetic medication that has been used safely  for <br /> decades in surgical and emergency settings. More recently, ketamine has emerged as a <br /> powerful treatment for depression, PTSD, anxiety, and other psychiatric conditions <br /> especially when traditional medications haven't worked.
        
        </>} 
        
        image={fact} />
      <Therapy/>
      <Klearmind />
      <FormsofTreatment/>
      <Psychotherapy  herapy/>
      <Lifedeserve imageSrc={therapyImg} classname="figee text-left px-10 lg:text-[2.3vw] leading-9 " heading={<>
        Ketamine treatments may be  covered with a pre approved  referral through your VA <br /> benefit
  </>} paragh={<>
    KlearMind Clinics is led by a top-rated anesthesiologist in Sacramento and supported by a comprehensive medical team.We understand the unique pressures and responsibilities faced bymilitary service members, and we're here to provide personalized treatment tailored to your needs.



  </>} 
  
  />
      <div className='lg:mt-0 md:mt-20'>
      <Trustedcommuntiy/>

      </div>
      <Faqs/>
      
    </div>
  )
}

export default Ketaminetherapy
