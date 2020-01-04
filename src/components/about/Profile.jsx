import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => {
  const { name, handle, avatar, bio } = props.person;

  return (
    <div className="mb-12 md:flex">

      <div className="w-48 h-48 flex-shrink-0 m-auto md:m-0 rounded-full shadow-lg bg-gray-800 text-gray-400 flex justify-center items-center">
        {avatar ? <img src={avatar} className="object-cover w-48 h-48 rounded-full" /> : 'Image coming soon'}
      </div>

      <article className="md:ml-6 md:mt-2">
        <h1 className="ml-4 md:m-0 text-yellow-600 font-display font-semibold uppercase leading-none">
          {name}
        </h1>

        {handle && (
          <a href={`https://twitter.com/${handle}`} className="ml-4 md:m-0 text-sm text-gray-400 hover:text-gray-200">
            @{handle}
          </a>
        )}

        {!bio ? <p className="mt-2 text-center">Bio coming soon</p> : bio.map((line, i) => (
          <p key={i} className="mt-2">
            {line}
          </p>
        ))}
      </article>
    </div>
  );
};

Profile.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.arrayOf(PropTypes.string)
  })
};

export default Profile;
