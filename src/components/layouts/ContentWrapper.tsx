import React, { FunctionComponent } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import Login from '../login/Login';
import history from '../../history';
import Animations from '../animations/Animations';
const ContentWrapper: FunctionComponent<any> = ({ onSignInWithProvider }) => {
  return (
    <Router history={history}>
      <Route
        path="/auth"
        render={props => <Login onSignInWithProvider={onSignInWithProvider} {...props} />}
      />
      <Route path="/animations" render={props => <Animations {...props} />} />
      <Redirect from="/" to="/auth" />
    </Router>
  );
};

export default ContentWrapper;
