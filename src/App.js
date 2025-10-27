import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Playground from './pages/Playground';
import HeroMap from './pages/HeroMap';
import Comparison from './pages/Comparison';
import Stories from './pages/Stories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/heromap" element={<HeroMap />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;