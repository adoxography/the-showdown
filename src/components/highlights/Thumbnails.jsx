import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = ({ videos, onClick }) => {
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
          <Thumbnail key={i} video={video} onClick={onClick} />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
