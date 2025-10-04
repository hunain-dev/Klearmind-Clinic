import React, { useState } from 'react'

const Button = ({ btn, bgcolor, textcolor, padding, border, hoverEffect = true,mousehover   }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`figee text-[1.8vh] border px-6 rounded-full cursor-pointer ${padding} ${border} transition-all duration-150 ${mousehover} ease-in-out`}
      style={{
        backgroundColor: hover && hoverEffect ? "#32140C" : bgcolor,
        color: textcolor,
      }}
      onMouseEnter={() => hoverEffect && setHover(true)}
      onMouseLeave={() => hoverEffect && setHover(false)}
    >
      {hover && hoverEffect ? "for Wellness only " : btn}
    </button>
  )
}

export default Button
