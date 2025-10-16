import React from 'react'
import KetamineinfusionLanding from './KetamineinfusionLanding'
import Ourplan from './Ourplan'
import NoCost from '../../Components/NoCost'
import fruit from "../../assets/images/fruit.png"
import ImpactinNumbers from './ImpactinNumbers'
import Loader from '../../Components/Loader'
const Ketamineinfusion = () => {
  return (
    <div className='w-full lg:py-34 md:py-34  py-20 lg:px-40'>
<Loader/>
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
