import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import RegForm from './components/Registration';

function App() {
  return (
    <html>
      <Route path="/">
        <Header />
        <Navigation />
      </Route>
      <Route path="/registration">
        <RegForm />
      </Route>
    </html>
  );
}

export default App;
