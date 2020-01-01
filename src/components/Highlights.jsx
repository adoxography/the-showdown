import React from 'react';

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
const Videos = ({ videos }) => (
  <div className="flex flex-wrap justify-center lg:mt-4">
    {videos.map((video, i) => (
      <div key={i} className="m-2">
        <Preview key={i} video={video} />
      </div>
    ))}
  </div>
);

/**
 * A preview thumbnail for a video
 */
const Preview = ({ video }) => (
  <article className="relative">
    <img src={video.thumbnail} alt={video.title} className="object-cover rounded-lg w-full h-full" />
    <a href={video.url} className="block absolute z-10 top-0 w-full h-full text-white p-2 rounded-lg bg-gray-900 opacity-0 hover:opacity-75">
      <h1 className="text-lg font-semibold font-display ml-2">{video.title}</h1>
    </a>
  </article>
);

class Highlights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videosLoaded: false,
      videos: []
    };
  }

  componentDidMount() {
    // Load the videos
    getPlaylistItems(playlists[0].id).then(videos => {
      this.setState(() => ({ videosLoaded: true, videos }));
    });
  }

  render() {
    const { videos, videosLoaded } = this.state;

    return (
      <section>
        {videosLoaded ? <Videos videos={videos} />: <Loading /> }
      </section>
    );
  }
}

export default Highlights;
