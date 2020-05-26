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
      <Homepage />
      <Navbar />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </AppContainer>
  );
}

export default App;
