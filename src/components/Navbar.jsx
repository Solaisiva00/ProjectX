// import React from 'react'
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-[#29339B] to-[#02051f]  h-[12vh] sticky top-0 px-[9rem] py-5 flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[4.9rem]" />
        <h2 className="text-white font-semibold tracking-wider">
          <span className="text-[25px] font-bold ml-3">E</span>MBEDDED AND LOOSE GRAIN SOLUTION
        </h2>
      </div>
      <ul className="flex gap-10 text-white font-Poppins  items-center ">
        <li className="hover:text-[#C1DBE3] tracking-wider ">Home</li>
        <li className="hover:text-[#C1DBE3] tracking-wider ">Product</li>
        <li className="hover:text-[#C1DBE3] tracking-wider ">About</li>
        <li className="hover:text-[#C1DBE3] tracking-wider ">Service</li>
        <li className="hover:text-[#C1DBE3] tracking-wider ">
          <button className="text-black tracking-wider hover:shadow-lg hover:scale-95 bg-white rounded-lg font-normal p-2 px-3">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
