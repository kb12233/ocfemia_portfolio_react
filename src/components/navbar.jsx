import React from 'react'
import BurgerMenu from './burger_menu';

function Navbar() {
  return (
    <div id="nav">
      <nav className="top-0 w-full">
        <div className="container mx-auto py-5 md:px-10 flex items-center justify-between">
          <div className="flex items-center">
          <span id="kb" className="text-2xl font-bold">Karl Brandon Ocfemia</span>
          </div>
          
          {/* nav links */}
          <ul className="hidden md:flex space-x-10 text-custom_gray2 font-bold text-sm">
            <li className="hover:text-gray-400">
                <a href="#about">About</a>
            </li>
            <li className="hover:text-gray-400">
                <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-gray-400">
                <a href="#contact">Contact</a>
            </li>
          </ul>
          
          <BurgerMenu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar