import React, { useState } from 'react';
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000514] text-white px-6 md:px-20 py-4 flex justify-between items-center z-50 shadow-md">
      {/* Logo */}
      <span className="text-xl font-bold">Portfolio</span>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li><a href="#About" className="hover:text-gray-400">About</a></li>
        <li><a href="#Experience" className="hover:text-gray-400">Experience</a></li>
        <li><a href="#Projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#Contact" className="hover:text-gray-400">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>


      {/* Mobile Menu */}
      <div className={`${toggle ? 'flex' : 'hidden'} absolute top-16 right-4 w-[200px] bg-[rgba(145,94,255,0.8)] text-white rounded-lg shadow-lg p-5 z-50 md:hidden`}>
        <ul className="flex flex-col gap-4 text-lg">
          <li><a href="#About" className="hover:text-gray-400" onClick={() => setToggle(false)}>About</a></li>
          <li><a href="#Experience" className="hover:text-gray-400" onClick={() => setToggle(false)}>Experience</a></li>
          <li><a href="#Projects" className="hover:text-gray-400" onClick={() => setToggle(false)}>Projects</a></li>
          <li><a href="#Contact" className="hover:text-gray-400" onClick={() => setToggle(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
