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
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item"><Link to="https://">About Me</Link></li>
                    <li className="footer-menu-item"><a href="https://www.linkedin.com/in/caida-ding/">My LinkedIn</a></li>
                    <li className="footer-menu-item"><a href="https://github.com/Caida001">My Github</a></li>
                    <li className="footer-menu-item"><a href="http://www.google.com">My Resume</a></li>
                    <li className="footer-menu-item"><Link to="">Angel List</Link></li>
                  </ul>
                </div>
              </div>
              <div className="main-footer-item">
                <div className="footer-menu">
                  <h3 className="footer-menu-header">Discover</h3>
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item"><Link to="">Nightlife</Link></li>
                    <li className="footer-menu-item"><Link to="">Restaurants</Link></li>
                    <li className="footer-menu-item"><Link to="">Shopping</Link></li>
                    <li className="footer-menu-item"><Link to="">Gyms</Link></li>
                    <li className="footer-menu-item"><Link to="">Hotels</Link></li>
                    <li className="footer-menu-item"><Link to="">Dry Cleaning</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="main-footer-city"></div>
            <small className="main-footer-copyright">
              Copyright 2018 Yeep Inc. Yeep and related marks are registered trademarks of Yeep.
            </small>
            </div>
          </div>
        </div>

    );
  }
}

export default Footer;
