import React from "react";
import Button from "./Button";
import rose from "../assets/images/Rose.png";
import riseup from "../assets/Video/riseup.mp4"
import klearlogo from "../assets/images/klearlogo.svg"
const Footer = () => {
  return (
    <div className="h-full w-full bg-black mt-80">
      <div className="front scdulecard min-w-[56%] bg-[#FDF9E9] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl -mt-23 grid grid-cols-[60%_41%] overflow-hidden">
        <div className="h-full  flex items-center justify-between flex-col">
          <div className="w-full  p-5 ">
            <div className="flex items-center gap-2 justify-start  pb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="figee text-[1.7vh] text-gray-600 tracking-wide">
                Schedule a Consultation
              </span>
            </div>{" "}
            <h2 className="fontspring text-[#32140C]  text-[3.4vw] leading-none font-[500]">
              We re here to listen, <br /> not just to treat
            </h2>
          </div>
          <div className="w-full p-5 ">
            <div className="flex gap-2 mt-1">
              <Button
                btn="book an appointment"
                padding="py-3 px-7"
                bgcolor="#FD8124"
                textcolor="white"
                border="border-none"
              />
              <Button
                btn="Am i a candidate"
                padding="py-1 px-8"
                hoverEffect={false}
                textcolor="black"
                border="border border-black"
              />
            </div>
          </div>
        </div>
        <div className="h-full  flex items-center justify-center">
          <img src={rose} alt="" className="h-[58vh] p-6  object-cover  " />
        </div>
      </div>

      <footer className="w-full bg-[#F8EEEC] py-35 px-40 ">
        <div className=" w-full  grid grid-cols-1">
          <div className="h-full  grid grid-cols-2 ">
            <div className="h-full   flex items-start justify-start gap-10 ">
              <div className="figee text-[2vh]  gap-1 flex items-start  flex-col text-[#563B35] ">
                <h2>Quick Links</h2>
                <h4>Home</h4>
                <h4>About us</h4>
                <h4>Treatments</h4>
                <h4>pricing</h4>
              </div>
              <div className="figee text-[2vh] gap-1 flex items-start  flex-col text-[#563B35] ">
                <h2>Support</h2>
                <h2>Blogs</h2>
              </div>

              <div className="figee text-[2vh] gap-1 flex items-start  flex-col text-[#563B35] ">
              <h2>Treatments</h2>

                <h4>Ketarmine therapy</h4>
                <h4>wellness therpy</h4>
              </div>
              
              </div>
              <div className="h-full w-full  grid grid-cols-2 ">
              <div className="figee text-[2vh] flex items-start gap-6 flex-col text-[#563B35] ">
                <h2>Location</h2>
                <h4>1249 Pleasant Grove Blvd <br />
                #100, Roseville, CA 95678</h4>
                <h4>Contact Information <br />
                916-900-6686</h4>
              </div>
             
              <div className="figee text-[2vh] flex items-start gap-2 flex-col text-[#563B35] ">
                <h2>Open Payments Database
                </h2>
                <h4>For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services (CMS) Open Payments web page is provided here.


                </h4>
                <h4>Read more
                </h4>
              </div>
         
              
              </div>          </div>
          <div className="h-full"> 
            <div className="relative h-[390px] top-13  rounded-2xl">
              <video src={riseup} autoPlay loop muted className="absolute inset-0 h-full w-full object-cover"></video>
              <div className="relative  flex items-end justify-end w-full">
  <div className="absolute top-50 flex items-end justify-end  ">
    <img src={klearlogo} alt="Klear Mind" className="object-contain" />
  </div>
</div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
