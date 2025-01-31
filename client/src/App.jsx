
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ReferralPage from './pages/ReferralPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/refer" className="nav-link">New Referral</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/refer" element={<ReferralPage />} />
      </Routes>
    </Router>
  );
};

export default App;