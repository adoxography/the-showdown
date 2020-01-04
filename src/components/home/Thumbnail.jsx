import React from 'react';
import PropTypes from 'prop-types';

import { Photo } from '../../apis/instagram';

const Thumbnail = ({ photo }) => (
  <a href={photo.url} target="_blank" rel="noopener" className="block flex-shrink-0 my-4">
    <img src={photo.thumbnail} alt={photo.caption} className="rounded-lg object-cover shadow w-64 h-64" />
  </a>
);


Thumbnail.propTypes = {
  photo: PropTypes.instanceOf(Photo)
};

export default Thumbnail;
