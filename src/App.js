import React from 'react';
import { Route } from 'react-router';

import { AppContainer } from './style/app-styles';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <AppContainer>
      <Route exact path='/' component={Homepage} />
      <Route path='/about' />
      <Route path='/skills' />
      <Route path='/projects' />
      <Route path='/contact' />
      
      <Navbar />
    </AppContainer>
  );
}

export default App;
