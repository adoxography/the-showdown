import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Highlights from './Highlights';
import ComingSoon from './ComingSoon';
import Footer from './Footer';

const App = () => {
  return (
    <Router basename="/">
      <React.Fragment>
        <Header />
        <Navbar />
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
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
