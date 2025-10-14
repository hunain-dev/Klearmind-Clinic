import React from 'react'
import Lifedeserve from '../../Components/Lifedeserve'
import bloomlife from "../../assets/Video/bloomlife.mp4"

const HomeLanding = () => {
  return (
    <div className='lg:py-14 py-0 h-full w-full'>
<Lifedeserve videoSrc={bloomlife} />
      
    </div>
  )
}

export default HomeLanding
