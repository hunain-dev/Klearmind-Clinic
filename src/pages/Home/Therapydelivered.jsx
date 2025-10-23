// import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sunrise from "../../assets/images/sunrise.svg";
import Button from "../../Components/Button";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Therapydelivered = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%", // jab section 80% viewport pe aaye
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          markers:true
        },
      });

      tl.from(imgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          btnRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      // ref={sectionRef}
      className="m-auto lg:mt-3  mt-2 lg:pb-25 pb-10 md:pb-20"
    >
      <div className="relative h-full lg:p-10 p-0 m-auto overflow-hidden flex items-center justify-center">
        <img
                  ref={imgRef}

          src={sunrise}
          className="lg:h-[32vw] md:h-[45vw] h-[80vw] object-contain"
          alt=""
        />

        <div
                  ref={textRef}

          className="absolute h-full lg:mt-53 mt-29 md:mt-41 flex items-center flex-col justify-center text-center lg:gap-2 gap-2"
        >
          <div className="flex items-center gap-2 justify-start lg:pb-0 pb-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[2vw] text-[3vw] text-gray-600 tracking-wide">
              What Is Klearmind?
            </span>
          </div>

          <h2 className="fontspring lg:text-[3.1vw] md:text-[4vw] lg:leading-13 text-2xl text-[#361911]">
            Ketamine therapy delivered <br /> in a calm and compassionate <br /> environment
          </h2>

          <div 
          
          
          >
            <Button ref={btnRef}
              btn="Learn more"
              fontSize="lg:text-[1vw] md:text-[2vw]"
              padding="lg:py-2 lg:mt-4 lg:px-9 py-2"
              border="border-gray-700"
              hoverEffect={false}
              to="/Ketaminetherapy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapydelivered;
