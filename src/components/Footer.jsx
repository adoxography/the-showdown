import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 absolute bottom-0 w-full px-4 xl:px-16 h-16 pt-2 xl:pt-4 flex justify-between">
    <div>
      <p className="text-sm text-gray-300">
        Copyright &copy; 2020 <a href="https://github.com/adoxography">Graham Still</a>
      </p>
    </div>

    <div className="hidden md:block text-sm text-gray-300">
      <a href="#" className="text-gray-300 hover:text-white">Home</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-300 hover:text-white">About</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-300 hover:text-white">Highlights</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-300 hover:text-white">Shop</a>
    </div>
  </footer>
);

export default Footer;
