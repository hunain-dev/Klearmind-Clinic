import React from 'react'
import NoCost from '../../Components/NoCost'
import costing from "../../assets/images/costing.png"

const KetamineinfusionLanding = () => {
  return (
    <div className=' w-full  grid grid-cols-1'>
        <div className='h-full w-full  text-center flex items-center gap-4 justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  text-gray-600 tracking-wide">
            Affordable, Accessible Care

            </span>
            </div>
            <h2 className='fontspring text-5xl text-[#32140C]'>Invest in Feeling Better
            </h2>
        </div>
        <div className='h-full w-full mt-20'>
            <NoCost img={costing} pretext="Learn if you are a good fit" text={<>
                No Cost <br /> Consultation

                </>}/>
            

        </div>

      
    </div>
  )
}

export default KetamineinfusionLanding
