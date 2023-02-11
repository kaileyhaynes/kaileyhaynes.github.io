import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import About from './About';
import Home from './Home';
import styles from '../css/nav.module.css';

const Navigation = () => {
    return (
        <nav>
            <div className={styles.thatsMyName}>
                <h1>KAILEY HAYNES</h1>
            </div>
            <ul className={styles.nav_links}>
                <li>
                <NavLink
                    to="/"
                    exact activeClassName='nav-link-active'
                    className={styles.nav_link}
                >
                    HOME
                </NavLink>
                </li>
                //
                <li>
                <NavLink
                    to="/portfolio"
                    activeClassName='nav-link-active'
                    className={styles.nav_link}
                >
                    PORTFOLIO
                </NavLink>
                </li>
                //
                <li>
                <NavLink
                    to="/about"
                    activeClassName='nav-link-active'
                    className={styles.nav_link}
                >
                    ABOUT
                </NavLink>
                </li>
            </ul>
        </nav>
    );
  }
  
  export default Navigation;

/*
<Route exact path="/" Component={Home} />
<Route path="/portfolio" Component={Portfolio} />
<Route exact path="/about" Component={About} />
*/