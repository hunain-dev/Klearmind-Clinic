import React from 'react'
import Button from '../../Components/Button'

const FormsofTreatment = () => {
    const treatment = [
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687108bdf414ecccaa6cc031_Frame%201410133861%20(1).avif",
            text:"IV Infusions",
        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687108bd8688c481f8a668d9_Frame%201410133862.avif",
            text:"Intramuscular ",

        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687108bd386d865e0c9b3d60_Frame%201410133863.avif",
            text:"Nasal ",


        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/683eb83a9fb9df7be8ab45ac_Frame%201410133939.avif",
            text:"Oral ",

            
            
            
        }
    ]
  return (
    <div className='     w-full grid mt-20 grid-cols-1 px-40'>
        <div className='h-full grid grid-cols-2
        '>
            <div className='h-full '>
            <div className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full "></span>
            <span className="figee text-[1.7vh]  text-gray-600 tracking-wide">
            Award-Winning Care, Year After Year
            </span>
            </div>
            <h2 className='figee text-4xl mt-2 text-[#32140C]' >Forms of Treatment            </h2>
            </div>
            <div className='h-full  flex items-start px-10 justify-start gap-4 flex-col'>
                <h3 className='figee text-[#63605F] text-sm'>There are 4 methods to deliver Ketamine treatments.</h3>
                <Button btn="Learn more" padding="py-3 px-8" hoverEffect={false} textcolor="black" border="border border-black"/>
            </div>
        </div>
        <div className='h-[50vh] mt-7 grid grid-cols-4 gap-5 p-5'>
            {
                treatment.map((elem,index)=>{
                    return(
                        <div key={index} className='g-full overflow-hidden ' style={{backgroundColor:elem.bgcolor}} >
                        <div className='w-full ' style={{backgroundColor:elem.innercolor}}>
                            <img src={elem.innerimg} className='h-full  rounded-2xl  w-full object-cover' alt="" />
                        </div>
                        <h3 className='figee text-[1.5vw] mt-2'>{elem.text}</h3>
                    </div>
                    )
                })
            }
          
        </div>
      
    </div>
  )
}

export default FormsofTreatment
