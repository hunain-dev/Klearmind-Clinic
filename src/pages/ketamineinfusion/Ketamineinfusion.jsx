import React from 'react'
import KetamineinfusionLanding from './KetamineinfusionLanding'
import Ourplan from './Ourplan'
import NoCost from '../../Components/NoCost'
import fruit from "../../assets/images/fruit.png"
import ImpactinNumbers from './ImpactinNumbers'
const Ketamineinfusion = () => {
  return (
    <div className='w-full py-34 px-40'>
        <KetamineinfusionLanding/>
        <Ourplan/>
        <NoCost  img={fruit} pretext="Treatment Overview" text={<>
            Wellness <br /> Therapy

            </>}/>
            <ImpactinNumbers/>

      
    </div>
  )
}

export default Ketamineinfusion
