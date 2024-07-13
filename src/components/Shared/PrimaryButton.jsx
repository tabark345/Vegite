import  "react";
import { FaArrowRight } from "react-icons/fa";
const PrimaryButton = () => {
  return (
    <div className="flex items-center group cursor-pointer">
      <button className="bg-primary  text-white p-2 cursor-pointer">
        Choose Your Meal Plan
      </button>
      <FaArrowRight className=" inline-block cursor-pointer group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white"/>
    </div>
  )
};

export default PrimaryButton;
