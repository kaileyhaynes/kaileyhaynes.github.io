import styles from '../css/portfolio.module.css';

import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className={styles.Portfolio}>
          <Link to="/project/jammming" id="fade_out">
            <img className="top" src={require("../visuals/jammming.png")} alt="headphones linking to my Jammming project"></img>
          </Link>
          <Link to="/project/ticketerr" id="fade_out">
            <img className="top" src={require("../visuals/ticketerr.png")} alt="ticket linking to my Ticketerr project"></img>
          </Link>
          <Link to="/project/RESTAPI" id="fade_out">
            <img className="top" src={require("../visuals/restapi.png")} alt="shopping bags linking to my REST API project"></img>
          </Link>
          <Link to="/project/redditReplica" id="fade_out">
            <img className="top" src={require("../visuals/rr.png")} alt="reddit icon linking to my Reddit Replica project"></img>
          </Link>
      </div>
    );
}

export default Portfolio;