import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 absolute bottom-0 w-full px-4 xl:px-16 h-16 pt-2 xl:pt-4 flex justify-between">
    <div>
      <p className="text-sm text-gray-300">
        Copyright &copy; 2020 <a href="https://github.com/adoxography">Graham Still</a>
      </p>
    </div>

    <div className="hidden md:block text-sm text-gray-300">
      <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
      <span className="px-1">&bull;</span>
      <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
      <span className="px-1">&bull;</span>
      <Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link>
    </div>
  </footer>
);

export default Footer;
