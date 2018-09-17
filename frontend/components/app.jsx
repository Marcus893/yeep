import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
import BusinessShowContainer from './business_show/business_show_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path="/" component={GreetingContainer} />
    <Route path='/' component={Footer} />
  </div>
);

export default App;
