import React from 'react';

const Navbar = () => (
  <nav className="flex justify-around border-t border-b border-gray-500 font-display uppercase text-lg font-light mx-2 md:mx-12 xl:mx-32">
    <a href="#" className="block px-1 md:px-8 xl:px-16 hover:bg-gray-200">Home</a>
    <a href="#" className="block px-1 md:px-8 xl:px-16 bg-gray-500 text-white">About</a>
    <a href="#" className="block px-1 md:px-8 xl:px-16 hover:bg-gray-200">Highlights</a>
    <a href="#" className="block px-1 md:px-8 xl:px-16 hover:bg-gray-200">Shop</a>
  </nav>
);

export default Navbar;
