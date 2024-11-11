import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage'

function App() {


return(
  <Router>
  <Routes>
    <Route index element={<LandingPage />} />
  </Routes>
  </Router>
)
}

export default App
