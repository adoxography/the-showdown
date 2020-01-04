import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavDropdown extends Component {
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
    const { links } = this.props;

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

NavDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

NavDropdown.defaultProps = {
  isOpen: false
};

export default NavDropdown;
