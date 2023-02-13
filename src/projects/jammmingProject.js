import styles from '../css/project.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Jammming = () => {
    return (
      <div className={styles.Project}>
        <div className={styles.details}>
            <h1>JAMMMING</h1>
            <h2>React.js, HTML&CSS, Spotify API</h2>
            <h3>11/27/2022 - Completed in 3 days</h3>

            <p>
            JAMMMING uses React class components and connects with a Spotify API.
            The application allows users to find songs in the search bar and add those songs to a
            playlist. Once a playlist is created, it's added to the user's active
            Spotify account.
            </p>

            <h4>Time Restrictions</h4>
            <ul>
                <li>None applicable</li>
            </ul>
        </div>

        <div className={styles.demo}>
            <video autoplay="true" muted controls="controls" src={require("../visuals/JammmingRecording.mp4")} type="video/mp4">
                Jammming demo
            </video>
 
            <Link to="/jammming_git" id={styles.projectLink}>
                JAMMMING Github repo
            </Link>
        </div>
      </div>
    );
}

export default Jammming;