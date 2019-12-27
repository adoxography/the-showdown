import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';

import { profiles } from '../mock';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <section className="mt-8 xl:mt-16 mx-4 md:mx-12 xl:mx-32">
        {profiles.map((profile, i) => (
          <Profile key={i} person={profile} />
        ))}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default App;
