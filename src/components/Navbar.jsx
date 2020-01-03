import React from 'react';
import { Link, NavLink as BaseNavLink } from 'react-router-dom';

const inactiveText = 'text-gray-400';
const hoverBg = 'hover:bg-gray-800';
const hoverText = 'hover:text-gray-100';
const activeBg = 'bg-yellow-200';
const activeText = 'text-yellow-900';

const NavLink = props => (
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

const DropdownLink = ({ to, onClick, children }) => (
  <a onClick={() => onClick(to)} className={`cursor-pointer block px-3 md:px-8 xl:px-16 ${inactiveText} ${hoverBg}`}>
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

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.$el = React.createRef();
  }

  get height() {
    return this.props.isOpen ? this.$el.current.scrollHeight : 0;
  }

  componentDidUpdate() {
    this.$el.current.style.height = `${this.height}px`;
  }

  render() {
    const links = this.props.links;

    return (
      <div className="flex text-base justify-around bg-gray-900 m-auto w-full flex-wrap md:px-12 xl:px-32 transition-height h-0 overflow-hidden" ref={this.$el}>
        {links.map(link => (
          <Link
            key={link.name}
            to={link.uri}
            className="block px-1 py-2 flex-grow text-center uppercase tracking-tight font-display font-light hover:bg-gray-800"
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }
}

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

        <Dropdown links={links} isOpen={this.state.isOpen} />
      </React.Fragment>
    );
  }
}

export default Navbar;
