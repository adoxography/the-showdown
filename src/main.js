import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from 'regenerator-runtime';

require('./css/tailwind.css');
import App from './components/App';
import { initialize as initializeYoutube } from './apis/youtube';

const $root = document.getElementById('root');
const render = () => ReactDOM.render(<App />, $root);

render();

initializeYoutube();

if (module.hot) {
  module.hot.accept('./components/App.jsx', render);
}
