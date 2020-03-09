import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentWrapper from './components/layouts/ContentWrapper';
import Toaster from './components/shared/toaster/Toaster';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <ContentWrapper />
      </Suspense>
    </div>
  );
}

export default App;
