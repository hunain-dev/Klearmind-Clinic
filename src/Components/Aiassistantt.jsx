import React from 'react'
import ai from "../assets/images/Ai.png"

const Aiassistantt = () => {
  return (
    <div className="fixed h-screen w-full z-[99] flex items-end justify-end pointer-events-none">
      <div className="p-4 pointer-events-auto">
        <img
          src={ai}
          alt=""
          className="h-[9.4vh] px-2 rounded-full object-contain"
        />
      </div>
    </div>
  )
}

export default Aiassistantt
