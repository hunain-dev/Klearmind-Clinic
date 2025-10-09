import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const columns = loaderRef.current.querySelectorAll(".column");

    // GSAP timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 3 },
    });

    // Stairs animation: har column ek ke baad ek upar jaaye
    tl.to(columns, {
      yPercent: -100,
      stagger: 0.2, // delay between each column
    }).to(
      loaderRef.current,
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
      },
      "-=0.3"
    );
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[999] grid grid-cols-5  overflow-hidden pointer-events-none"
    >
      <div className="column h-full bg-[#FD8124]"></div>
      <div className="column h-full bg-[#FD8124]"></div>
      <div className="column h-full bg-[#FD8124]"></div>
      <div className="column h-full bg-[#FD8124]"></div>
      <div className="column h-full bg-[#FD8124]"></div>
    </div>
  );
};

export default Loader;
