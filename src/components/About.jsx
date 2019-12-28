import React from 'react';

import Profile from './Profile';

import { profiles } from '../mock';

const About = () => (
  <section className="mt-4 pb-1 xl:mt-8 mx-4 md:mx-12 xl:mx-32">
    <h1 className="mb-6 font-display capitalize text-3xl tracking-narrow font-thin text-center">Our staff</h1>

    {profiles.map((profile, i) => (
      <Profile key={i} person={profile} />
    ))}
  </section>
);

export default About;
