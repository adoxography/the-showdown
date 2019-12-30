import React from 'react';

const Profile = props => {
  const { name, handle, avatar, bio } = props.person;

  return (
    <div className="mb-12 md:flex">
      <img src={avatar} alt={name} className="w-48 h-48 m-auto md:m-0 object-cover rounded-full shadow-lg" />
      <article className="md:ml-6 md:mt-2">
        <h1 className="ml-4 md:m-0 text-yellow-600 font-display font-semibold uppercase leading-none">
          {name}
        </h1>
        <a href={`https://twitter.com/${handle}`} className="ml-4 md:m-0 text-sm text-gray-400 hover:text-gray-200">
          @{handle}
        </a>
        {bio.map((line, i) => (
          <p key={i} className="mt-2">
            {line}
          </p>
        ))}
      </article>
    </div>
  );
};

export default Profile;
