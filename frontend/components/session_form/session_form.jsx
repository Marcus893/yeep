import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div>
        <nav className="loginNav">
          <Link className="yeep" to="/">yeep</Link>
        </nav>
        <div className="session-form-master">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h2 className="heading">{this.props.formType} to Yeep</h2>
              <p className="subheading">
                New to Yeep?
                <Link to="/signup">Sign up</Link>
              </p>
              <p className="legal-copy">By logging in, you agree to Yeep's Terms of Service and Private Policy.</p>
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input" />
                <br/>
                <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>

          <div class="picture-container">
            <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png" />
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(SessionForm);
