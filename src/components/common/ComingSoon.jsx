import React from 'react';

import svg from '../../svg';

const ComingSoon = () => (
  <section className="mt-6">
    <p className="text-center font-display text-3xl mb-4 text-gray-300">Coming soon...</p>
    <div className="mx-4 md:mx-24 lg:mx-32 xl:mx-48 pb-4">
      {svg.underConstruction}
    </div>
  </section>
);

export default ComingSoon;
