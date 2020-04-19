import React, { useState } from 'react';
import { Route } from 'react-router';

import { AppContainer } from './style/app-styles';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import BackButton from './components/BackButton';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [showBack, setShowBack] = useState(false)

  return (
    <AppContainer>
      {showBack && <BackButton />}

      <Route exact path='/' component={Homepage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/skills' component={SkillsPage} />
      <Route path='/projects' component={ProjectsPage} />
      <Route path='/contact' component={ContactPage} />
      
      <Navbar />
    </AppContainer>
  );
}

export default App;
