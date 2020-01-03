import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

const Home = lazy(() => import('./home/Home'));
const About = lazy(() => import('./about/About'));
const Highlights = lazy(() => import('./highlights/Highlights'));
const ComingSoon = lazy(() => import('./common/ComingSoon'));

const App = () => {
  return (
    <Router>
        <Header />
        <Navbar />
        <Suspense fallback={<div className="text-center text-gray-700">Loading...</div>}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route
              path="/highlights/:playlist"
              component={props => <Highlights playlist={props.match.params.playlist} key={props.location.pathname} />}
            />

            <Route path="/shop">
              <ComingSoon />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
    </Router>
  );
};

export default App;
