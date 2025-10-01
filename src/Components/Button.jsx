import React, { useState } from 'react'

const Button = ({ btn, bgcolor, textcolor, padding, border, hoverEffect = true }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`figee text-[1.8vh] border px-6 rounded-full ${padding} ${border} transition-all duration-150 ease-in-out`}
      style={{
        backgroundColor: hover && hoverEffect ? "#32140C" : bgcolor,
        color: textcolor,
      }}
      onMouseEnter={() => hoverEffect && setHover(true)}
      onMouseLeave={() => hoverEffect && setHover(false)}
    >
      {hover && hoverEffect ? "Wellness For" : btn}
    </button>
  )
}

export default Button
