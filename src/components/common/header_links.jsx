import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';

const inactiveText = 'text-gray-400';
const hoverBg = 'hover:bg-gray-800';
const hoverText = 'hover:text-gray-100';
const activeBg = 'bg-yellow-200';
const activeText = 'text-yellow-900';

export const NavLink = props => (
  <BaseNavLink
    exact={props.exact}
    to={props.to}
    className={`block px-1 md:px-8 xl:px-16 ${inactiveText} ${hoverBg}`}
    activeClassName={`${activeBg} ${activeBg} ${activeText} cursor-default`}
    onClick={props.onClick}
  >
    {props.children}
  </BaseNavLink>
);

export const DropdownLink = ({ to, onClick, children }) => (
  <a onClick={() => onClick(to)} className={`cursor-pointer block px-3 md:px-8 xl:px-16 ${inactiveText} ${hoverBg}`}>
    {children}
  </a>
);
