import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import Thumbnails from './Thumbnails';
import { getPhotos } from '../../apis/instagram';
import svg from '../../svg';

const Loading = () => (
  <div className="w-24 h-24 m-auto">
    {svg.loading}
  </div>
);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { photosLoaded: false, photos: [] }
  }

  componentDidMount() {
    getPhotos()
      .then(photos => {
        this.setState(() => ({ photosLoaded: true, photos }));
      })
      .catch(err => {
        console.error(err);
        this.setState(() => ({ photosLoaded: true, photos: [] }));
      });
  }

  render() {
    return (
      <div className="px-8 md:px-16 xl:px-40 mt-4 pb-8">
        <MetaTags>
          <title>Home | Manitoba Showdown</title>
          <meta name="description" content="Manitoba Showdown brings you highlights of the top amateur athletes in Manitoba." />
        </MetaTags>

        {this.state.photosLoaded ? <Thumbnails photos={this.state.photos} /> : <Loading />}

        {this.state.photosLoaded && (
          <div className="mt-8 flex justify-center">
            <a href={`https://instagram.com/thesidelineshowdown`} target="_blank" rel="noopener" className="border border-yellow-200 text-yellow-200 hover:bg-gray-900 text-center rounded px-3 py-2">See more</a>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
