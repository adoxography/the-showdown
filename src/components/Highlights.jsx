import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

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
const Videos = ({ videos, onClick }) => {
  if (videos.length === 0) {
    return (
      <div className="m-auto mt-8 relative">
        <div className="px-4 md:px-32 lg:px-48 pb-4">
          {svg.empty}
        </div>
        <div className="absolute top-0 mt-16 md:mt-20 lg:mt-32 xl:mt-40 w-full flex justify-center">
          <p className="px-3 text-center text-display text-2xl xl:text-4xl bg-gray-1000 rounded-lg shadow-lg opacity-75">
            No videos yet.<br />Check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center lg:mt-4">
      {videos.map((video, i) => (
        <div key={i} className="m-2">
          <Preview key={i} video={video} onClick={onClick} />
        </div>
      ))}
    </div>
  );
}

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
      videosLoaded: false,
      videos: [],
      activeVideo: null
    };
  }

  get playlistId() {
    return playlists[this.props.playlist];
  }

  componentDidMount() {
    // Load the videos
    getPlaylistItems(this.playlistId)
      .then(videos => {
        this.setState(() => ({ videosLoaded: true, videos }));
      })
      .catch(err => {
        this.setState(() => ({ videosLoaded: true, videos: [] }));
      });
  }

  handleClick = video => {
    this.setState(() => ({ activeVideo: video }));
  }

  handleClickOutside = () => {
    this.setState(() => ({ activeVideo: null }));
  }

  render() {
    const { activeVideo, videos, videosLoaded } = this.state;

    return (
      <section>
        {videosLoaded ? <Videos videos={videos} onClick={this.handleClick} />: <Loading /> }

        {activeVideo && <Player video={activeVideo} onClickOutside={this.handleClickOutside} />}

        {videosLoaded && videos.length > 0 &&
          <div className="flex justify-center mt-8 pb-4">
            <a href={`https://www.youtube.com/playlist?list=${this.playlistId}`} target="_blank" className="border border-yellow-200 text-yellow-200 hover:bg-gray-900 text-center rounded px-3 py-2">See more</a>
          </div>
        }
      </section>
    );
  }
}

export default Highlights;
