import React from 'react';

import { highlights } from '../mock';
import { getPlaylistItems, playlists } from '../apis/youtube';
import svg from '../svg';

const SmallPreview = props => {
  const { onClick, showInfo } = props;
  const { title, thumbnail, description, url } = props.highlight;

  return (
    <article className="relative">
      <img src={thumbnail} alt={title} onClick={onClick} className="w-full h-48 object-cover" />
      {showInfo &&
        <a href={url} className="block absolute z-10 top-0 w-full h-full text-gray-200 overflow-hidden p-2" style={{ backgroundColor: '#000000c0' }}>
          <h1 className="text-lg font-semibold font-display ml-2">{title}</h1>
          <p className="mx-2">{description}</p>
        </a>
      }
    </article>
  );
};

const LargePreview = props => {
  const { onClick, showInfo } = props;
  const { title, thumbnail, description, url } = props.highlight;

  return (
    <article className="relative w-48 h-48">
      <img src={thumbnail} alt={title} className="object-cover rounded-lg w-full h-full" />
      <a href={url} className="block absolute z-10 top-0 w-full h-full text-white p-2 rounded-lg bg-gray-900 opacity-0 hover:opacity-75">
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
      infoIndex: -1,
      videosLoaded: false,
      videos: []
    };
  }

  handleClick(infoIndex) {
    this.setState(() => ({ infoIndex }));
  }

  componentDidMount() {
    getPlaylistItems(playlists[0].id).then(videos => {
      this.setState(() => ({ videosLoaded: true, videos }));
    });
  }

  render() {
    const { videos, videosLoaded, infoIndex } = this.state;

    if (!videosLoaded) {
      return (
        <section>
          <div className="w-24 m-auto mt-16">
            {svg.loading}
          </div>
        </section>
      );
    }

    return (
      <section>
        <div className="md:hidden">
          {videos.map((highlight, i) => (
            <SmallPreview key={i} highlight={highlight} showInfo={i === infoIndex} onClick={() => this.handleClick(i)} />
          ))}
        </div>

        <div className="hidden md:flex flex-wrap justify-center lg:mt-4">
          {videos.map((video, i) => (
            <div className="m-2">
              <LargePreview key={i} highlight={video} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Highlights;
