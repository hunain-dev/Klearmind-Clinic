import React from 'react'
import Button from '../../Components/Button'

const Invest = () => {
    const investamout  = [
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        }, {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },

        
    ]
  return (
    <div className=' w-full mt-20 grid grid-cols-1 px-40'>
        <div className='h-full  flex items-center justify-start gap-4 flex-col'>
        <div className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  text-gray-600 tracking-wide">
            Affordable, Accessible Care

            </span>
            </div>
            <h2 className='fontspring text-5xl text-[#32140C]'>Invest in Feeling Better
            </h2>
        </div>
        <div className=' mt-15  grid grid-cols-2 rounded-3xl overflow-hidden'>
  {/* Left Side */}
  <div className='px-4  flex flex-col gap-1 '>
  <div className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  text-gray-600 tracking-wide">
            Intramuscular


            </span>
            </div>
    <h1 className='figee text-4xl  text-[#32140C]'>Wellness Injections</h1>



    <div className='mt-6 p-3 space-y-11 text-[#333]'>
    {
    investamout.map((elem,index)=>{
        return(
            <div key={index} className='figee flex justify-between border-b border-gray-300 pb-2'>
            <p>{elem.text}<br/><span className='text-gray-500 text-sm'>{elem.paragh}</span></p>
            <p className='figee text-2xl'>{elem.amount}</p>
           
          </div>
          
        )
    })
 }
      <Button 
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              padding="py-3" 
              border="border" 
              hoverEffect={true}
            />
    </div>
  </div>

  {/* Right Side */}
  <div className='flex items-center justify-center overflow-hidden p-4  '>
    <img 
      src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687a53f21a64e080ec87a222_asca%20(7).avif"
      alt="Injection"
      className='w-full h-full rounded-4xl object-contain'
    />
  </div>
</div>
      
    </div>
  )
}

export default Invest
