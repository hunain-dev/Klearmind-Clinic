import React from 'react'
import NoCost from '../../Components/NoCost'
import costing from "../../assets/images/costing.png"

const KetamineinfusionLanding = () => {
  return (
    <div className=' w-full  grid grid-cols-1'>
        <div className='h-full w-full  text-center flex items-center lg:gap-4 gap-1 justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] text-[3.6vw]  text-gray-600 tracking-wide">
            Affordable, Accessible Care

            </span>
            </div>
            <h2 className='fontspring lg:text-5xl text-[7.9vw] text-[#32140C]'>Invest in Feeling Better
            </h2>
        </div>
        <div className='h-full w-full lg:mt-20 mt-9 lg:px-0 px-1'>
            <NoCost img={costing} pretext="Learn if you are a good fit" text={<>
                No Cost <br /> Consultation

                </>}/>
            

        </div>

      
    </div>
  )
}

export default KetamineinfusionLanding
