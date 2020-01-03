import React from 'react';
import MetaTags from 'react-meta-tags';

import Profile from './Profile';

import { profiles } from '../mock';

const About = () => (
  <section className="mt-4 pb-1 xl:mt-8 mx-4 md:mx-12 xl:mx-32">
    <MetaTags>
      <title>About | Manitoba Showdown</title>
      <meta name="description" content="The Manitoba Showdown staff are experienced and professional." />
    </MetaTags>

    <h1 className="mb-6 font-display text-yellow-300 uppercase text-3xl tracking-tight font-thin text-center">Our staff</h1>

    {profiles.map((profile, i) => (
      <Profile key={i} person={profile} />
    ))}
  </section>
);

export default About;
