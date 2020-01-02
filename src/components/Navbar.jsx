import React from 'react';
import { Link, NavLink as BaseNavLink } from 'react-router-dom';

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

const DropdownLink = ({ to, onClick, children }) => (
  <a onClick={() => onClick(to)} className={`cursor-pointer block px-3 md:px-8 xl:px-16 text-${inactiveText} hover:bg-${hoverBg}`}>
    {children}
  </a>
);

const dropdownLinks = {
  'highlights': [
    { name: 'football', uri: '/highlights/football' },
    { name: 'volleyball', uri: '/highlights/volleyball' },
    { name: 'soccer', uri: '/highlights/soccer'},
    { name: 'hockey', uri: '/highlights/hockey'},
    { name: 'badminton', uri: '/highlights/badminton'}
  ]
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: null };
  }

  handleDropdownClicked = dropdown => {
    this.setState(state => ({
      dropdown: state.dropdown === dropdown ? null : dropdown
    }));
  }

  handleDropdownLinkClicked = () => {
    this.setState(() => ({ dropdown: null }));
  }

  render() {
    return (
      <React.Fragment>
        <nav className={`relative flex justify-center lg:justify-around border-t border-b border-${activeBg} font-display uppercase text-lg font-light mx-2 md:mx-12 xl:mx-32`}>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <DropdownLink to="highlights" onClick={this.handleDropdownClicked}>Highlights</DropdownLink>
          <NavLink to="/shop">Shop</NavLink>
        </nav>

        {this.state.dropdown && (
          <div className="flex text-base justify-around bg-gray-900 m-auto w-full flex-wrap md:px-12 xl:px-32 ">
            {dropdownLinks[this.state.dropdown].map(link => (
              <Link
                key={link.name}
                to={link.uri}
                onClick={this.handleDropdownLinkClicked}
                className="block px-1 py-2 flex-grow text-center uppercase tracking-tight font-display font-light hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Navbar;
