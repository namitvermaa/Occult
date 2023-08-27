import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import JobSearch from './pages/jobssearch'


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobSearch />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default AppRouter;