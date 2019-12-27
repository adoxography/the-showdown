import React from 'react';
import ReactDOM from 'react-dom';

require('./css/tailwind.css');

const $root = document.getElementById('root');

const Header = () => (
  <header className="flex md:block md:ml-20 xl:ml-48 justify-center font-display uppercase">
    <h1 className="leading-none tracking-tight mt-2 md:my-4">
      <span className="ml-4 lg:ml-6 block text-4xl lg:text-5xl">The</span>
      <span className="text-5xl lg:text-6xl">Showd<svg className="fill-current w-8 inline pb-3" style={{ paddingLeft: '2px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/></svg>wn</span>
    </h1>
  </header>
);

const Navbar = () => (
  <nav className="flex justify-around border-t border-b border-gray-500 font-display uppercase text-lg font-light mx-2 md:mx-12 xl:mx-32">
    <a href="#" className="block px-1 md:px-8 xl:px-16 hover:bg-gray-200">Home</a>
    <a href="#" className="block px-1 md:px-8 xl:px-16 bg-gray-500 text-white">About</a>
    <a href="#" className="block px-1 md:px-8 xl:px-16 hover:bg-gray-200">Highlights</a>
    <a href="#" className="block px-1 md:px-8 xl:px-16 hover:bg-gray-200">Shop</a>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-500 px-4 xl:px-16 pt-2 xl:pt-4 pb-8 mt-8 flex justify-between">
    <div>
      <p className="text-sm text-gray-800">
        Copyright &copy; 2020 The Showdown
      </p>
    </div>

    <div className="hidden md:block text-sm text-gray-700">
      <a href="#" className="text-gray-800 hover:text-gray-700">Home</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-800 hover:text-gray-700">About</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-800 hover:text-gray-700">Highlights</a>
      <span className="px-1">&bull;</span>
      <a href="#" className="text-gray-800 hover:text-gray-700">Shop</a>
    </div>
  </footer>
);

const Profile = props => {
  const { name, handle, avatar, bio } = props.person;

  return (
    <div className="mb-12 md:flex">
      <img src={avatar} alt={name} className="w-48 h-48 m-auto md:m-0 object-cover rounded-full shadow-lg" />
      <article className="md:ml-6 md:mt-2">
        <h1 className="ml-4 md:m-0 font-display font-semibold uppercase leading-none">
          {name}
        </h1>
        <a href={`https://twitter.com/${handle}`} className="ml-4 md:m-0 text-sm text-gray-700 hover:text-gray-600">
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

const profiles = [
  {
    name: 'Mike Still',
    handle: 'mikestill',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorum voluptatem facilis placeat deserunt obcaecati cupiditate eos. Laudantium consequatur doloremque magni eligendi, optio aliquam dicta porro possimus expedita! Quod, quos.']
  },
  {
    name: 'Laura Ipsum',
    handle: 'lauraipsum',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorum voluptatem facilis placeat deserunt obcaecati cupiditate eos. Laudantium consequatur doloremque magni eligendi, optio aliquam dicta porro possimus expedita! Quod, quos.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorum voluptatem facilis placeat deserunt obcaecati cupiditate eos. Laudantium consequatur doloremque magni eligendi, optio aliquam dicta porro possimus expedita! Quod, quos.'
    ]
  },
  {
    name: 'Foo Bar',
    handle: 'foobar',
    avatar: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorum voluptatem facilis placeat deserunt obcaecati cupiditate eos. Laudantium consequatur doloremque magni eligendi, optio aliquam dicta porro possimus expedita! Quod, quos.']
  },
];

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

const render = () => ReactDOM.render(<App />, $root);

render();

if (module.hot) {
  module.hot.accept('./components/App.jsx', render);
}
