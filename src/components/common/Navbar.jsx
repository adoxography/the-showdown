import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, DropdownLink } from './header_links';
import NavDropdown from './NavDropdown';

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

    this.state = {
      dropdown: null,
      isOpen: false
    };
  }

  handleDropdownClicked = dropdown => {
    this.setState(state => ({
      dropdown,
      isOpen: !state.isOpen
    }));
  }

  closeDropdown = () => {
    this.setState(() => ({ isOpen: false }));
  }

  render() {
    const links = this.state.dropdown ? dropdownLinks[this.state.dropdown] : [];

    return (
      <React.Fragment>
        <nav className="relative flex justify-center lg:justify-around border-t border-b border-yellow-200 font-display uppercase text-lg font-light mx-2 md:mx-12 xl:mx-32">
          <NavLink exact to="/" onClick={this.closeDropdown}>Home</NavLink>
          <NavLink to="/about" onClick={this.closeDropdown}>About</NavLink>
          <DropdownLink to="highlights" onClick={this.handleDropdownClicked}>Highlights</DropdownLink>
          <NavLink to="/shop" onClick={this.closeDropdown}>Shop</NavLink>
        </nav>

        <NavDropdown links={links} isOpen={this.state.isOpen} />
      </React.Fragment>
    );
  }
}

export default Navbar;
