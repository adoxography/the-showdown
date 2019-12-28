import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';

const NavLink = props => (
  <BaseNavLink
    exact={props.exact}
    to={props.to}
    className="block px-3 md:px-8 xl:px-16 hover:bg-gray-200"
    activeClassName="bg-gray-500 hover:bg-gray-500 text-white cursor-default"
  >
    {props.children}
  </BaseNavLink>
);

const Navbar = () => (
  <nav className="flex justify-center lg:justify-around border-t border-b border-gray-500 font-display uppercase text-lg font-light mx-2 md:mx-12 xl:mx-32">
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/highlights">Highlights</NavLink>
    <NavLink to="/shop">Shop</NavLink>
  </nav>
);

export default Navbar;
