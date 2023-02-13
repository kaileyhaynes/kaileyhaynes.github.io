import styles from '../css/project.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const RedditReplica = () => {
    return (
      <div className={styles.Project}>
        <div className={styles.details}>
            <h1>REDDIT REPLICA</h1>
            <h2>React.js, HTML&CSS, JSON, Reddit API</h2>
            <h3>12/28/2022 - Completed in 1 week</h3>

            <p>
                An application replicating Reddit that allows users to view and search posts provided by the API.
                Input a word or phrase in the searchbar and discover the first 25 posts most relevant to your search.
                The title, post image, number of comments, number of votes, and account name are all displayed and given
                from the undocumented Reddit API.
                If a post image is not available, the alt text 'no post image' will be displayed.
            </p>

            <h4>Time Restrictions</h4>
            <ul>
                <li>Change alt-text to display an alt-image</li>
                <li>Add the date created for each post</li>
                <li>Link each post to the subreddit</li>
            </ul>
        </div>

        <div className={styles.demo}>
            <video autoplay="true" muted controls="controls" src={require("../visuals/reddit-replicaRecording.mp4")} type="video/mp4">
                Reddit Replica demo
            </video>
 
            <Link to="/rr_git" id={styles.projectLink}>
                Reddit Replica Github repo
            </Link>
        </div>
      </div>
    );
}

export default RedditReplica;