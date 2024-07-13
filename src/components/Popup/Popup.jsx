/* eslint-disable react/prop-types */
import  "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Popup = ({orderPopup, setOrderPopup}) => {
  return <>
  {orderPopup && (
      <div>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className=" fixed top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          p-4 w-[300px] 
          shadow-md bg-white rounded-md duration-200">

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-dark">Login</h1>
              </div>
              <div>
                <IoCloseOutline  className="text-2xl cursor-pointer"
                onClick={()=>setOrderPopup(false)}/>
              </div>
            </div>
              <div className="mt-4">
                <input type="email" placeholder="Enter E-mail" className="w-full rounded-md border
                border-gray-300  dark:border-gray-500 
                px-2 py-1 mb-4"/>

                <input type="password" placeholder="Enter Password" className="w-full rounded-md border
                border-gray-300  dark:border-gray-500 
                px-2 py-1 mb-4"/>


                <div>
                  <button className=" w-full p-2 
                  bg-primary hover:bg-primaryDark 
                  text-white text-xl rounded-md duration-100"
                  onClick={()=>setOrderPopup(false)}>
                    log In
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-center">or log in with</p>
                  <div className="flex justify-center items-center row-auto gap-2 p-2">
                    <FaFacebook className="text-3xl cursor-pointer hover:text-blue-500"/>
                    <FaGoogle className="text-3xl cursor-pointer hover:text-red-500 "/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  </>;
};

export default Popup;
