import React from 'react';
import styles from './App.module.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Switch, Route } from 'react-router-dom';

import Navigation from './components/Nav';
import Footer from './components/Socials';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';

import Jammming from './projects/jammmingProject';
import RedditReplica from './projects/redditProject';
import RESTAPI from './projects/restAPIProject';
import Ticketerr from './projects/seniorProject';


class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/project/jammming">
              <Jammming />
            </Route>
            <Route path="/project/redditReplica">
              <RedditReplica />
            </Route>
            <Route path="/project/RESTAPI">
              <RESTAPI />
            </Route>
            <Route path="/project/ticketerr">
              <Ticketerr />
            </Route>

            <Route
              path="/linkedIn"
              component={() => {
                window.location.replace("https://www.linkedin.com/in/kailey-bright");
                return null;
              }}
            />
            <Route
              path="/gitHub"
              component={() => {
                window.location.replace("https://github.com/kaileyhaynes");
                return null;
              }}
            />
            <Route
              path="/jammming_git"
              component={() => {
                window.location.replace("https://github.com/kaileyhaynes/jammming");
                return null;
              }}
            />
            <Route
              path="/rr_git"
              component={() => {
                window.location.replace("https://github.com/kaileyhaynes/reddit-replica");
                return null;
              }}
            />
            <Route
              path="/restapi_git"
              component={() => {
                window.location.replace("https://github.com/kaileyhaynes/restAPICommerce");
                return null;
              }}
            />
            <Route
              path="/ticketerr_git"
              component={() => {
                window.location.replace("https://github.com/kaileyhaynes/ticketerr");
                return null;
              }}
            />
          </Switch>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;