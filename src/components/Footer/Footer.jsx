import  "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return <>
  <div className="text-white mt-20"
          data-aos="fade-down">
    <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
        <h1 className=" py-10 text-3xl font-bold text-yellow text-center"> Contact Us </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-14 
        border-b-2 border-white pb-6">
          <div className=" text-center space-y-4">
            <div className="flex justify-center">
              <IoLocationSharp className="text-5xl "/>
            </div>
            <p>#92, 3rd Main, Virgo Nagar, Post,
            <br/>Seegehalli, Bengaluru, Karnataka 560049</p>
          </div>

          <div className=" text-center space-y-4">
            <div className="flex justify-center">
              <MdEmail className="text-5xl "/>
            </div>
            <p>#@infoVegi.com</p>
            <p>DS@infoVegi.com</p>
          </div>

          <div className=" text-center space-b-4">
            <div className="flex justify-center">
              <FaPhone className="text-5xl "/>
            </div>
            <p>0124578963-Delivery</p>
            <p>01127958268-Hering Qeuyres</p>
            <p>0127854963-WhatsApp</p>
          </div>
        </div>
        <div className="flex justify-between p-4 items-center">
          <p>@ 2024TK,All Right Reservd</p>
          <div className="flex items-center gap-6">
            <a href="#Privacy Policy">Privacy Policy</a>
            <a href="#Terms & Conditions">Terms & Conditions</a>
          </div>
        </div>
    </div>
  </div>
  </>;
};

export default Footer;
