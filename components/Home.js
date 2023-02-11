import React from 'react';
import styles from '../css/home.module.css';
import { ReactDOM } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Footer from './Socials';

const Home = () => {
    return (
      <div className={styles.Home}>
        <video autoplay muted>
          <source src={require("../visuals/Jammming Recording.mp4")} type="video/mp4"></source>
            Video of me here. A sample right now.
        </video>
      </div>
    );
}

export default Home;