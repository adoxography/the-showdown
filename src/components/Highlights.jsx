import React from 'react';
import ReactPlayer from 'react-player';

import { getPlaylistItems, playlists } from '../apis/youtube';
import svg from '../svg';

/**
 * Component shown while data is still being loaded
 */
const Loading = () => (
  <div className="w-24 m-auto mt-16">
    {svg.loading}
  </div>
);

/**
 * Displays a list of videos
 */
const Videos = ({ videos, onClick }) => (
  <div className="flex flex-wrap justify-center lg:mt-4">
    {videos.map((video, i) => (
      <div key={i} className="m-2">
        <Preview key={i} video={video} onClick={onClick} />
      </div>
    ))}
  </div>
);

/**
 * A preview thumbnail for a video
 */
const Preview = ({ video, onClick }) => (
  <article className="relative">
    <img src={video.thumbnail} alt={video.title} className="object-cover rounded-lg w-full h-full" />
    <a onClick={() => onClick(video)} className="block absolute z-10 top-0 w-full h-full text-white p-2 rounded-lg bg-gray-900 opacity-0 hover:opacity-75">
      <h1 className="text-lg font-semibold font-display ml-2">{video.title}</h1>
    </a>
  </article>
);

const Player = ({ video, onClickOutside }) => (
  <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50" onClick={onClickOutside} style={{ backgroundColor: '#000000a0' }}>
    <div className="rounded-lg overflow-hidden shadow-2xl">
      <ReactPlayer url={video.url} playing controls />
    </div>
  </div>
);

class Highlights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: playlists[0],
      videosLoaded: false,
      videos: [],
      activeVideo: null
    };
  }

  componentDidMount() {
    const { playlist } = this.state;

    // Load the videos
    getPlaylistItems(playlist.id).then(videos => {
      this.setState(() => ({ videosLoaded: true, videos }));
    });
  }

  handleClick = video => {
    this.setState(() => ({ activeVideo: video }));
  }

  handleClickOutside = () => {
    this.setState(() => ({ activeVideo: null }));
  }

  render() {
    const { playlist, videos, videosLoaded } = this.state;

    return (
      <section>
        {videosLoaded ? <Videos videos={videos} onClick={this.handleClick} />: <Loading /> }

        {this.state.activeVideo && <Player video={this.state.activeVideo} onClickOutside={this.handleClickOutside} />}

        <div className="flex justify-center mt-8 pb-4">
          <a href={`https://www.youtube.com/playlist?list=${playlist.id}`} target="_blank" className="border border-yellow-200 text-yellow-200 hover:bg-gray-900 text-center rounded px-3 py-2">See more</a>
        </div>
      </section>
    );
  }
}

export default Highlights;
