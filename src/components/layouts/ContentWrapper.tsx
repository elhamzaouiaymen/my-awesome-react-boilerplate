import React, { FunctionComponent } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import Login from '../login/Login';
import history from '../../history';
import Animations from '../animations/Animations';
import Notifications from '../notifications/Notification';
const ContentWrapper: FunctionComponent<any> = ({ onSignInWithProvider }) => {
  return (
    <Router history={history}>
      <Route
        path="/auth"
        render={props => <Login onSignInWithProvider={onSignInWithProvider} {...props} />}
      />
      <Route path="/animations" render={props => <Animations {...props} />} />
      <Route path="/notifications" render={props => <Notifications {...props} />} />
      <Redirect from="/" to="/auth" />
    </Router>
  );
};

export default ContentWrapper;
