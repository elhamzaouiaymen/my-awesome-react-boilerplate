import React, { Suspense, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentWrapper from './components/layouts/ContentWrapper';
import NavigationBar from './components/shared/navigation/NavigationBar';
import AppHeader from './components/shared/app-header/AppHeader';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { FirebaseConfig } from './firebase';

function App() {
  const [currentUser, setCurrentUser] = useState();

  const handleSigninWithProvider = (providerName: string) => {
    let authProvider = null;
    switch (providerName) {
      case 'google':
        authProvider = new firebase.auth.GoogleAuthProvider();
        break;

      case 'facebook':
        authProvider = new firebase.auth.FacebookAuthProvider();
        break;

      case 'github':
        authProvider = new firebase.auth.GithubAuthProvider();
        break;

      default:
        break;
    }

    if (authProvider)
      firebase
        .auth()
        .signInWithPopup(authProvider)
        .then(data => {
          console.log(data);
          setCurrentUser(data.user);
        })
        .catch((error: firebase.FirebaseError) => {
          console.log(error);
        });
  };

  return (
    <div className="App">
      <FirebaseAuthProvider {...FirebaseConfig} firebase={firebase}>
        <Suspense fallback="loading">
          <AppHeader currentUser={currentUser} />
          <NavigationBar />
          <ContentWrapper onSignInWithProvider={handleSigninWithProvider} />
        </Suspense>
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;
