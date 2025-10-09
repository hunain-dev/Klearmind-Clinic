import React from 'react'
import Button from '../../Components/Button'

const VitaminIV = () => {
  return (
    <div className=' w-full relative mt-30 px-40 '>
     <div className='rounded-3xl grid grid-cols-[60%_40%] justify-center h-full w-full bg-[#FDF9E9]'>
  <div className='h-full p-4 py-8 flex items-start justify-between flex-col'>
    <div className='w-full px-3'>
    <div className='flex items-center gap-2 justify-start '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  tracking-wide">
            Treatment Benefits
            </span>
            </div>
            
            <h3 className='figee text-4xl mt-7 text-[#32140C]'>The Power of Vitamin IV Therapy
            </h3>
    </div>

    <div className='w-full-400 px-3 '>           
   
            <h4 className='figee text-[2.3vh] pb-6 mt-8 text-[#7D7871]'>
            IV Vitamin Therapy when compared to oral supplements does show significant effectiveness over the oral route which delivers superior and potent doses of <br /> nutrients that bypass your digestive system. FSA/HSA is accepted for all <br /> wellness treatments.

            </h4>
            <Button btn="Learn more" padding="py-3 px-13" hoverEffect={false}/>
    </div>
  </div>
  <div className='h-full  '>
    <img src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838396f1e145a96c4f81eda_83cebfdb2c55cd5999898def9addedcb%201.avif" alt="" className='h-[37vw] object-cover' />
  </div>
</div>
    </div>
  )
}

export default VitaminIV
