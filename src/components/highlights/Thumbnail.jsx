import React from 'react';

const Thumnail = ({ video, onClick }) => (
  <article className="relative">
    <img src={video.thumbnail} alt={video.title} className="object-cover rounded-lg w-full h-full" />
    <a onClick={() => onClick(video)} className="block absolute z-10 top-0 w-full h-full text-white p-2 rounded-lg bg-gray-900 opacity-0 hover:opacity-75">
      <h1 className="text-lg font-semibold font-display ml-2">{video.title}</h1>
    </a>
  </article>
);

export default Thumnail;