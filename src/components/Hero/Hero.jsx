import  "react";
import PrimaryButton from "../Shared/PrimaryButton";
import bgImg from '../../assets/heroBg.png'
import hero from "../../assets/hero.png";

const bgStyle ={
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div style={bgStyle} className="relative z-[1]">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2
        gap-4 place-items-center 
        min-h-[600px]">
          <div className="
          space-y-7 text-dark order-1 sm:order-2">
            <h1 className="text-5xl font-bold " data-aos="fade-up">
            Fresh & Healthy Meal Plan Delivery in <span className="text-secondary font-cursive text-5xl">Aswan</span>
            </h1>
            <p className=" lg:pr-64" data-aos="fade" data-aos-delay="300">Delicious Meals Delivered to Your Door From $132.95 per week</p>
            <PrimaryButton data-aos="zoom" data-aos-delay="500" />
          </div>
          <div className="flex justify-center items-center relative z-30 order-2 sm:order-3" data-aos="fade" data-aos-delay="300">
            <img src={hero} alt=""  className="w-full sm:scale-125 sm:translate-y-16"/>
          </div>
        </div>
      </div>

    </div>
  ) 
};

export default Hero;
