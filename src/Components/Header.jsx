import React from 'react'
import Logo from "../assets/images/Logo.png"
import Button from './Button'
const Header = () => {
  return (
    <div className=' w-full  px-40 text-[#282A2F] flex items-center justify-between'>
        <div className='py-4 '>
            <img src={Logo} alt="" className='h-[1.8vw] object-contain' />
        </div>
        <div className='figee text-[1.8vh] h-full px-3    flex items-center justify-start gap-6'>
            <h4>Ketamine therapy</h4>
            <h4>Wellness therapy</h4>
            <h4>Pricing</h4>
            <h4>Patient portal</h4>
            <Button btn="am i a candidate?" padding="py-2" border="border-gray-700" hoverEffect={false} />
        </div>
      
    </div>
  )
}

export default Header
