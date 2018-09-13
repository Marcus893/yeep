import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <div className="homepage">
      <nav className="auth">
        <Link className="logo" to="/">Yeep</Link>
        <div className="login-signup">
          <Link className="loginbtn" to="/login">Log In</Link>

          <Link className="signupbtn" to="/signup">Sign Up</Link>
        </div>
      </nav>
      <form className="search-form">
        <div className="arrange-equal">
          <div className="arrange-unit">
            <div className="search-suggestions">
              <label className="search-input">
                <div className="pseudo-input-wrapper">
                  <span className="input-text">Find</span>
                  <span className="input-holder">
                    <input disabled autoComplete="off" spellCheck="false" tabIndex="-1" className="style1"/>
                    <input autoComplete="off" maxLength="64" placeholder="dry cleaners, burgers, spas..." className="style2" aria-autocomplete="list" tabindex="1" data-component-bound="true" id="find_desc" />
                    <input type="hidden" maxLength="64" data-component-bound="true" name="find_desc" />
                  </span>
                </div>
                ::after
              </label>
              <div className="list-container" data-component-bound="true">
                <ul className="suggestions-list" role="listbox" aria-label="Search results"></ul>
              </div>
            </div>
          </div>
          <div className="arrange-unit">
            <div className="arrange">
              <div className="arrange-unit-fill">
                <div className="search-near">
                  <label className="form-input-near">
                    <div>
                      <span className="input-text">Near</span>
                      <span className="input-holder">
                        <input autocomplete="off" id="dropperText_Mast" maxlength="80" placeholder="address, neighborhood, city, state or zip" value="Civic Center, Manhattan, NY" className="style1" aria-autocomplete="list" tabindex="2" data-component-bound="true" />
                        <input type="hidden" maxlength="80" data-component-bound="true" name="find_loc" value="Civic Center, Manhattan, NY" />
                        <input type="hidden" name="ns" value="1" />
                      </span>
                    </div>
                  </label>
                  <div className="list-container" data-component-bound="true">
                    <ul className="suggestions-list" role="listbox" aria-label="Search results"></ul>
                  </div>
                </div>
              </div>
              <div className="arrange-unit">
                <button className="btn" id="search-submit" tabindex="3" title="Search" type="submit" value="submit">
                  <span>
                    <span className="u-offscreen">Search</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.firstname} {currentUser.lastname}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
