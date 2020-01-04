import React from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter } from 'react-router-dom';

import Thumbnails from './Thumbnails';
import Player from './Player';
import { getPlaylistItems } from '../../apis/youtube';
import playlistData from './playlist_data';
import { capitalize } from '../../util';
import svg from '../../svg';

const Loading = () => (
  <div className="w-24 m-auto mt-16">
    {svg.loading}
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
    return playlistData[this.props.playlist];
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
    const { playlist } = this.props;

    return (
      <section>
        <MetaTags>
          <title>{capitalize(playlist)} Highlights | Manitoba Showdown</title>
          <meta name="description" content={`Manitoba Showdown presents the newest and most exciting highlights from amateur ${playlist} in Manitoba.`} />
        </MetaTags>

        {videosLoaded ? <Thumbnails videos={videos} onClick={this.handleClick} />: <Loading /> }

        {activeVideo && <Player video={activeVideo} onClickOutside={this.handleClickOutside} />}

        {videosLoaded && videos.length > 0 &&
          <div className="flex justify-center mt-8 pb-4">
            <a href={`https://www.youtube.com/playlist?list=${this.playlistId}`} target="_blank" rel="noopener" className="border border-yellow-200 text-yellow-200 hover:bg-gray-900 text-center rounded px-3 py-2">See more</a>
          </div>
        }
      </section>
    );
  }
}

export default Highlights;
