// src/App.jsx (Updated version)
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
    </div>
  );
}

export default App;
