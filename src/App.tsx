import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentWrapper from './components/layouts/ContentWrapper';
import NavigationBar from './components/shared/navigation/NavigationBar';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <NavigationBar />
        <ContentWrapper />
      </Suspense>
    </div>
  );
}

export default App;
