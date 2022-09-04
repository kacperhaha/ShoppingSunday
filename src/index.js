import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './pages/HomePage';
import List from './pages/List.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/lista" element={<List />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    
  </React.StrictMode>
);

