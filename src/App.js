import React from 'react';
import { Route } from 'react-router';

import { AppContainer } from './style/app-styles';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

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
