import React from 'react';
import styles from '../css/home.module.css';

const Home = () => {
    return (
      <div className={styles.Home}>
        <video autoplay="true" muted src={require("../visuals/JammmingRecording.mp4")} type="video/mp4">
            Video of me here.
        </video>
      </div>
    );
}

export default Home;