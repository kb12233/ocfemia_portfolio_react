import React from "react";

function BurgerMenu() {
  return (
    <div className="dropdown dropdown-end md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a id="hamburger-option" href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a id="hamburger-option" href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a id="hamburger-option" href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;