import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import WeatherMonitoring from './WeatherMonitoring';

function App() {
  return (
    <Router>
      {/* 
        Temporary Developer Navigation: 
        This is just so you can easily click between pages while building. 
        You can remove this later once your actual UI navigation is wired up! 
      */}
      <div className="bg-slate-900 text-white p-3 flex justify-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-orange-400">Landing Page</Link>
        <Link to="/dashboard" className="hover:text-orange-400">Main Dashboard</Link>
        <Link to="/monitoring" className="hover:text-orange-400">GIS & Monitoring</Link>
      </div>

      {/* The Routes determine which component renders based on the URL */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoring" element={<WeatherMonitoring />} />
      </Routes>
    </Router>
  );
}

export default App;