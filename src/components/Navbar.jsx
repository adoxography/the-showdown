import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';

const inactiveText = 'gray-400';
const hoverBg = 'gray-800';
const hoverText = 'gray-100';
const activeBg = 'yellow-200';
const activeText = 'yellow-900';

const NavLink = props => (
  <BaseNavLink
    exact={props.exact}
    to={props.to}
    className={`block px-3 md:px-8 xl:px-16 text-${inactiveText} hover:bg-${hoverBg}`}
    activeClassName={`bg-${activeBg} hover:bg-${activeBg} text-${activeText} cursor-default`}
  >
    {props.children}
  </BaseNavLink>
);

const Navbar = () => (
  <nav className={`flex justify-center lg:justify-around border-t border-b border-${activeBg} font-display uppercase text-lg font-light mx-2 md:mx-12 xl:mx-32`}>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/highlights">Highlights</NavLink>
    <NavLink to="/shop">Shop</NavLink>
  </nav>
);

export default Navbar;
