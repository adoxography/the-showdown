import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';
import { Photo } from '../../apis/instagram';

const Thumbnails = ({ photos }) => (
  <div className="flex justify-center md:justify-between flex-wrap">
    {photos.map((photo, index) => (
      <Thumbnail key={index} photo={photo} />
    ))}
  </div>
);

Thumbnails.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.instanceOf(Photo))
};

export default Thumbnails;
