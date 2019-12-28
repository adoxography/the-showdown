import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import svg from '../svg';

const Loading = () => (
  <div className="w-24 h-24 m-auto">
    {svg.loading}
  </div>
);

const Home = () => (
  <div className="flex px-8 md:px-16 xl:px-40 mt-4">
    <div className="lg:px-4">
      <p>
        This is a mockup for <strong className="font-semibold">The Showdown</strong>'s website. This early draft uses a grayscale colour scheme and minimalist design. It uses <strong className="font-semibold">responsive design</strong>, meaning that the page will look different depending on the size of screen you view it on.
      </p>

      <p className="mt-2">
        In production, this page could serve as an activity feed. If you view it on a tablet or higher, you can see an example Twitter feed.
      </p>

      <p className="mt-2">
        The <strong className="font-semibold">Highlights</strong> and <strong className="font-semibold">Store</strong> are still WIP, but feel free to have a look at the <Link to="/about" className="font-semibold text-blue-700">About</Link> page.
      </p>

      <div className="mx-4 mt-4">
        {svg.underConstruction}
      </div>
    </div>
    <div className="hidden md:block w-48 flex-shrink-0 flex-grow-0">
      <TwitterTimelineEmbed sourceType="profile" screenName="mikestill94" placeholder={<Loading />} autoHeight noHeader noFooter />
    </div>
  </div>
);

export default Home;
