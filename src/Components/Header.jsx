import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 px-40 text-[#282A2F] flex items-center justify-between transition-all duration-500 
      ${isScrolled ? "backdrop-blur-lg bg-white/60" : "bg-transparent"}`}
    >
      {/* Left Logo */}
      <div className="py-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-[1.8vw] object-contain" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="figee text-[1.8vh] h-full px-3 flex items-center justify-start gap-6 relative">
        <Link to="/Ketaminetherapy">
          <h4>Ketamine Therapy</h4>
        </Link>

        <Link to="/Wellnesthraypy">
          <h4>Wellness Therapy</h4>
        </Link>

        {/* Pricing Dropdown (on hover) */}
{/* Pricing Dropdown (hover + click both work) */}
<div
  className="relative cursor-pointer"
  onMouseEnter={() => setOpenDropdown(true)}
  onMouseLeave={() => setOpenDropdown(false)}
  onClick={() => setOpenDropdown(!openDropdown)}
>
   <h4 className="transition duration-200 select-none">
    Pricing
  </h4>

  {openDropdown && (
    <div className="absolute flex flex-col items-start justify-start top-7 left-0 bg-white border border-gray-300 rounded-xl z-50 gap-3 w-44 px-5 py-3 shadow-lg">
      <h2 className="hover:text-[#6b4dee] transition duration-200 cursor-pointer">
        Ketamine Infusion
      </h2>
      <h2 className="hover:text-[#6b4dee] transition duration-200 cursor-pointer">
        Wellness Therapy
      </h2>
    </div>
  )}
</div>



        <h4>Patient Portal</h4>

        <Button
          btn="am i a candidate?"
          padding="py-2"
          border="border-gray-700"
          hoverEffect={false}
        />
      </div>
    </div>
  );
};

export default Header;
