import React from 'react'
import Lifedeserve from '../../Components/Lifedeserve'
import bloomlife from "../../assets/Video/bloomlife.mp4"

const HomeLanding = () => {
  return (
    <div className='lg:py-14 md:py-19 py-0 h-full w-full'>
<Lifedeserve videoSrc={bloomlife} classname="fontspring text-center lg:text-5xl" heading={<>
  Bloom into the life <br /> you deserve with Klearmind
  </>} paragh={<>
    Safe, evidence-based Ketamine infusions for psychiatric disorders <br /> and chronic pain management


  </>} />
      
    </div>
  )
}

export default HomeLanding
