import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import { Video } from '../../apis/youtube';

const Player = ({ video, onClickOutside }) => (
  <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50" onClick={onClickOutside} style={{ backgroundColor: '#000000a0' }}>
    <div className="rounded-lg overflow-hidden shadow-2xl">
      <ReactPlayer url={video.url} playing controls width="100vw" />
    </div>
  </div>
);

Player.propTypes = {
  video: PropTypes.instanceOf(Video).isRequired,
  onClickOutside: PropTypes.func
};

export default Player;
