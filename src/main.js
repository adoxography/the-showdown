import React from 'react';
import ReactDOM from 'react-dom';

require('./css/tailwind.css');
import App from './components/App';

const $root = document.getElementById('root');
const render = () => ReactDOM.render(<App />, $root);

render();

if (module.hot) {
  module.hot.accept('./components/App.jsx', render);
}
