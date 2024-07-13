import "react";
import apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/kiwi.png'
import leaf from '../../assets/png/leaf.png'
import lemon from '../../assets/png/lemon.png'
import tomato from '../../assets/png/tomato.png'
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return <>
    <div className="container py-14 relative">
      <div className="relative z-20">
        <h1 className="py-8 tracking-wide text-2xl 
        font-semibold text-dark 
        text-center"
        data-aos="fade-up"
        data-aos-delay="300"
        >Taste the Healthy Difference
        </h1>

        <div data-aos="fade-up"
        data-aos-delay="300"
        className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div>
              <p>
                {' '}
                We know that <span className="text-primary">time</span> is the greatest value 
                in the modern world.Our healthy meal 
                plan delivery service Good Food in 
                Miami is the answer for those who 
                want to eat healthily, saving time for 
                buying food and preparing delicious,
                healthy meals.
              </p>
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div></div>
            <div>
              <p>
                {' '}
                We know that <span className="text-primary">time</span> is the greatest value 
                in the modern world.Our healthy meal 
                plan delivery service Good Food in 
                Miami is the answer for those who 
                want to eat healthily, saving time for 
                buying food and preparing delicious,
                healthy meals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 sm:mt-14 "
                data-aos="fade-up"
                data-aos-delay="300">
          <PrimaryButton />
        </div>
      </div>
      <div className=" absolute top-5 left-0 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
              data-aos="fade-right"
              data-aos-delay="300">
        <img src={leaf} alt="" className="max-w-[160px]"/>
      </div>
      <div className=" absolute top-10 right-16  sm:right-20 opacity-50 sm:opacity-100"
              data-aos="fade-left"
              data-aos-delay="300">
        <img src={lemon} alt="" className="max-w-[200px]"/>
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/3 opacity-50 sm:opacity-100"
              data-aos="fade"
              data-aos-delay="300">
        <img src={kiwi} alt="" className="max-w-[180px]"/>
      </div>
      <div className=" absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
              data-aos="fade-right"
              data-aos-delay="300">
        <img src={tomato} alt="" className="max-w-[280px]"/>
      </div>
      <div className=" hidden absolute bottom-0 right-0   sm:block opacity-50 sm:opacity-100"
              data-aos="fade-left"
              data-aos-delay="300">
        <img src={apple} alt="" className="max-w-[200px]"/>
      </div>
    </div>
  </>;
};

export default Banner;
