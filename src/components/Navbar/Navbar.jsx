/* eslint-disable react/prop-types */
import "react";

import { FaCaretDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const NavLinks=[
  {
    id:1,
    name:"Home",
    link:"/#"
  },
  {
    id:1,
    name:"About",
    link:"/#"
  },
  {
    id:1,
    name:"Contact",
    link:"/#"
  },
];
const DropDowen =[
  { id:1,
    name:"Vegetables",
    link:"/#"
  },
  { id:2,
    name:"Fruits",
    link:"/#"
  },
  { id:3,
    name:"Vegetables",
    link:"/#"
  }
]
const Navbar = ({handleOrderPopup}) => {
  return (
  <div className="bg-white shadow-md"  data-aos="fade" >
    <div className="container flex justify-between py-4 sm:py3">
      <div className="font-bold text-3xl">Vegia</div>
      <div>
        <ul className="flex items-center gap-10">
          {NavLinks.map(({id,name,link})=>(
            <li key={id}>
              <a href={link} className="hidden sm:inline-block hover:text-primary text-xl font-semibold">{name}</a>
            </li>
          ))}
          <li className=" hidden md:inline-block cursor-pointer group">
            <a href="#" 
            className="flex items-center 
            hover:text-primary 
            text-xl 
            font-semibold">
              Categerios
                <div className="flex items-center gap-[2px] py-2 ">
                  <span>
                    <FaCaretDown className=" group-hover:rotate-180 duration-300"/>
                  </span>
                </div>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2 ">
                <ul>
                  {DropDowen.map(({id,link,name})=>(
                      <li key={id}>
                      <a href={link} className="inline-block hover:bg-primary/20 text-xl rounded-md p-2 ">{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
          </li>
          <div>
            <button className="flex justify-center 
            items-center gap-2 
            bg-secondary 
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
        </ul>
      </div>
    </div>

  </div>
)
};

export default Navbar;
