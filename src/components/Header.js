// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Telemedicine App</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/user-medical-info">User Medical Info</Link></li>
          <li><Link to="/patient-data">Patient Data</Link></li>
          <li><Link to="/emergency-alerts">Emergency Alerts</Link></li>
          <li><Link to="/emergency-contact">Emergency Contacts</Link></li>
          <li><Link to="/symptom-checker">Symptom Checker</Link></li>
          <li><Link to="/health-log">Health Log</Link></li>
          <li><Link to="/health-resources">Health Resources</Link></li>
          <li><Link to="/medicine-locator">Medicine Locator</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li> {/* Added Chatbot link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
