import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<div className="p-8">Projects Page Content</div>} />
          <Route path="blog" element={<div className="p-8">Blog Page Content</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
