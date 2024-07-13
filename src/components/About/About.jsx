/* eslint-disable react/prop-types */
import  "react";
import bgPolyImg from '../../assets/polygon.png'
import wave from '../../assets/vector-wave.png'
import { FaUserCircle } from "react-icons/fa";

const bgStyle ={
  backgroundImage: `url(${bgPolyImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
  posation: 'relative',
};
const About = ({handleOrderPopup}) => {
  return <>
  <div style={bgStyle} className="">
      <div className=" h-[200px] z-20 relative top-0 right-0"> 
        <img src={wave} alt="wave" className=" absolute  top-0 right-0 w-full h-auto " />
      </div> 
      <div className="container min-h-[500px] relative z-10">
        <h1 data-aos="fade"
        className=" pt-20 tracking-wide text-4xl 
            font-semibold text-white 
            text-center">About Us </h1>

      <div data-aos="fade-up"
        data-aos-delay="300" className="bg-white/80 p-10 my-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repudiandae error aut nobis porro quo vel magnam! 
      Aliquid officia perferendis consequuntur nulla soluta deleniti dolor similique eveniet,
      esse impedit tenetur consequatur?
        <div className=" pt-10 flex justify-center">
          <button data-aos="flip-up" data-aos-delay="300" className="flex justify-center 
                items-center gap-2 
                bg-primary 
                text-white
                p-2 
                rounded-sm 
                hover:scale-110 
                hover:shadow-md 
                duration-300"
                onClick={handleOrderPopup}>
                  <FaUserCircle className="text-2xl"/>
                  My, Account
            </button>
        </div>
      </div>
      </div>
  </div>
  </>;
};

export default About;
