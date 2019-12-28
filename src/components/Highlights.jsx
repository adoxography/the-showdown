import React from 'react';

import { highlights } from '../mock';

const SmallPreview = props => {
  const { onClick, showInfo } = props;
  const { title, image, description } = props.highlight;

  return (
    <article className="relative">
      <img src={image} alt={title} onClick={onClick} className="w-full h-48 object-cover" />
      {showInfo &&
        <a href="#" className="block absolute z-10 top-0 w-full h-full text-gray-200 overflow-hidden p-2" style={{ backgroundColor: '#000000c0' }}>
          <h1 className="text-lg font-semibold font-display ml-2">{title}</h1>
          <p className="mx-2">{description}</p>
        </a>
      }
    </article>
  );
};

const LargePreview = props => {
  const { onClick, showInfo } = props;
  const { title, image, description } = props.highlight;

  return (
    <article className="relative w-48 h-48">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <a href="#" className="block absolute z-10 top-0 w-full h-full text-white p-2 bg-gray-900 opacity-0 hover:opacity-75">
        <h1 className="text-lg font-semibold font-display ml-2">{title}</h1>
      </a>
    </article>
  );
}

class Highlights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlights,
      infoIndex: -1
    };
  }

  handleClick(infoIndex) {
    this.setState(() => ({ infoIndex }));
  }

  render() {
    const { highlights, infoIndex } = this.state;

    return (
      <section>
        <div className="md:hidden">
          {highlights.map((highlight, i) => (
            <SmallPreview key={i} highlight={highlight} showInfo={i === infoIndex} onClick={() => this.handleClick(i)} />
          ))}
        </div>

        <div className="hidden md:flex flex-wrap justify-center lg:mt-4">
          {highlights.map((highlight, i) => (
            <div className="m-2">
              <LargePreview key={i} highlight={highlight} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Highlights;
