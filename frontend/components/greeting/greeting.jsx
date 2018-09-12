import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <div className="homepage">
      <nav className="auth">
        <Link className="logo" to="/">Yeep</Link>
        <div className="login-signup">
          <Link className="loginbtn" to="/login">Login</Link>

          <Link className="signupbtn" to="/signup">Sign Up</Link>
        </div>
      </nav>
    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
