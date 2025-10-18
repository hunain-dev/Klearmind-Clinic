import React from 'react'
import KetamineinfusionLanding from './KetamineinfusionLanding'
import Ourplan from './Ourplan'
import NoCost from '../../Components/NoCost'
import fruit from "../../assets/images/fruit.png"
import ImpactinNumbers from './ImpactinNumbers'
import Loader from '../../Components/Loader'
const Ketamineinfusion = () => {
  const stats = [
    {
      number: "30+",
      text: (
        <>
          Years of combined <br /> Experience
        </>
      ),
    },
    {
      number: "92+",
      text: (
        <>
          Patients report <br /> feeling relief
        </>
      ),
    },
    {
      number: "100+",
      text: (
        <>
          Successful <br /> infusions
        </>
      ),
    },
  ];

  return (
    <div className='w-full lg:py-34 md:py-34  py-20 lg:px-40'>
<Loader/>
        <KetamineinfusionLanding/>
        <Ourplan/>
        <NoCost  img={fruit} pretext="Treatment Overview" text={<>
            Wellness <br /> Therapy

            </>}/>

            
            <div className='lg:mt-20'>
            <ImpactinNumbers
      title="Impact in Numbers"
      subtitle={
        <>
          One Goal <br /> To help you feel whole again
        </>
      }
      data={stats}
      dotColor="bg-orange-500" // optional
    />
          
          
            </div>
   
      
    </div>
  )
}

export default Ketamineinfusion
