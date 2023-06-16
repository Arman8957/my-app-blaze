import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Logo_Black.png'

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="lg:w-48 w-32" />
      </div>
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-black hover:text-gray-400 mr-6 inline-flex justify-center w-full  rounded-md lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

        </button>

        {isDropdownOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
            <div className="py-1" role="none">
              <Link to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1">
                Home
              </Link>
              <Link to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1">
                Services
              </Link>
              <Link to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1">
                Contact Us
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="lg:flex items-center hidden">
        <Link to="#" className="text-black hover:text-gray-400 mr-6">
          Home
        </Link>
        <Link to="#" className="text-black hover:text-gray-400 mr-6">
          Services
        </Link>
        <Link to="#" className="text-black hover:text-gray-400 mr-6">
          Contact Us
        </Link>
        <Link
          to="#"
          className="text-white font-bold hover:bg-red-600 mr-6 bg-red-500 px-3 py-3 rounded-md"
        >
          Get a Quote
        </Link>
      </div>
    </nav>

  );
};

export default NavigationBar;