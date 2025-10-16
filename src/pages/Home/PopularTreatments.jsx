import React from 'react'

const PopularTreatments = () => {
  const obj = [
    {
      image:
        "https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6870f3b9987d45a3477ef978_Frame%201410133546%20(1)-p-500.avif",
      text: "Ketamine IV Infusion",
      paragh: "Rapid relief for anxiety, depression, chronic pain, and PTSD.",
    },
    {
        image:
          "https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6870f3b90b4a0fc895987957_Frame%201410133622-p-500.avif",
        text: "Wellness iv and injection",
        paragh: "Non-invasive brain stimulation for depression and anxiety treatment.",
      },
  ]

  return (
    <div className="h-full lg:mt-30 mt-10 md:mt-20 w-full grid lg:grid-cols-1 ">
      {/* Heading */}
      <div className="h-full w-full flex items-center justify-start lg:gap-1 md:gap-2 flex-col">
        <h3 className="figee lg:text-[2vh] text-[3.5vw] md:text-[2vw]">Our Most Requested Treatments</h3>
        <h3 className="figee lg:text-[2.3vw] text-3xl md:text-[3.5vw] text-[#32140C]">Requested Treatments</h3>
      </div>

      {/* Treatments Grid */}
      <div className="h-full w-full lg:px-40 px-9  lg:mt-9 mt-10 flex flex-col ">

        <div className='grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4'>
        {obj.map((elem, index) => (
          <div key={index} className="">
            {/* Left: Image */}
            <div className="overflow-hidden rounded-3xl">
  <img
    className="lg:h-[27vw] md:h-[35vw] w-full object-cover rounded-4xl transition-transform duration-700 ease-in-out hover:scale-110"
    src={elem.image}
    alt={elem.text}
  />
</div>

            {/* Right: Text/Paragraph */}
            <div className=" lg:px-6 md:px-10 text-center">
              <h2 className="figee lg:text-[1.8vw] md:text-[2.2vw] text-[5vw] py-3 text-[#413D3D]">{elem.text}</h2>
              <h4 className="figee lg:text-[1vw] text-[#9E9C9B]">{elem.paragh}</h4>
            </div>
          </div>
        ))}
        </div>
     
      </div>
    </div>
  )
}

export default PopularTreatments
