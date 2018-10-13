import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class Footer extends React.Component {
  render() {
    return (
      <div className="main-content-wrap">
        <div className="content-container">
          <div className="main-footer">
            <div className="main-footer-section">
              <div className="main-footer-item">
                <div className="footer-menu">
                  <h3 className="footer-menu-header">About</h3>

                    <li className="footer-menu-item"><a href="https://caidading.com">About Me</a></li>
                    <li className="footer-menu-item"><a href="https://www.linkedin.com/in/caida-ding/">My LinkedIn</a></li>
                    <li className="footer-menu-item"><a href="https://github.com/Caida001">My Github</a></li>
                    <li className="footer-menu-item"><a href="https://docs.google.com/document/d/1RpFdQZCZ1FvteoApipDaQl8qfm776LTFl1XkI9WL_Nw/view">My Resume</a></li>
                    <li className="footer-menu-item"><a href="https://angel.co/caida-ding">Angel List</a></li>

                </div>
              </div>
              <div className="main-footer-item">
                <div className="footer-menu">
                  <h3 className="footer-menu-header">More Projects</h3>
                    <li className="footer-menu-item"><a href="https://github.com/Caida001/yeep">Yeep Repo</a></li>
                    <li className="footer-menu-item"><a href="http://caidading.com/maze-visualization/">Maze Visualization</a></li>
                    <li className="footer-menu-item"><a href="http://caidading.com/stocks-data-visualization/">Stocks Data Visualization</a></li>
                    <li className="footer-menu-item"><a href="https://caidading.com">About Me</a></li>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer-city"></div>
        <small className="main-footer-copyright">
          Copyright 2018 Yeep Inc. Yeep and related marks are registered trademarks of Yeep.
        </small>
      </div>

    );
  }
}

export default Footer;
