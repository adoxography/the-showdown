import React from 'react';

const Footer = () => (
  <footer className="bg-gray-500 px-4 xl:px-16 pt-2 xl:pt-4 pb-8 mt-8 flex justify-between">
    <div>
      <p className="text-sm text-gray-800">
        Copyright &copy; 2020 The Showdown
      </p>
    </div>

    <div className="hidden md:block text-sm text-gray-700">
      <a href="#" className="text-gray-800 hover:text-gray-700">Home</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-800 hover:text-gray-700">About</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-800 hover:text-gray-700">Highlights</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-800 hover:text-gray-700">Shop</a>
    </div>
  </footer>
);

export default Footer;
