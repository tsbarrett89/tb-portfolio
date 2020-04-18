import React from 'react';
import { Route } from 'react-router';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Homepage />
      <Navbar />

      <Route exact path='/' />
      <Route path='/about' />
      <Route path='/skills' />
      <Route path='/projects' />
      <Route path='/contact' />
    </div>
  );
}

export default App;
