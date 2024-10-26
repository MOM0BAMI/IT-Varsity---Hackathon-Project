// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Telemedicine App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/user-medical-info">User Medical Info</Link></li>
          <li><Link to="/patient-data">Patient Data</Link></li>
          <li><Link to="/emergency-alerts">Emergency Alerts</Link></li>
          <li><Link to="/emergency-contact">Emergency Contacts</Link></li>
          <li><Link to="/symptom-checker">Symptom Checker</Link></li> {/* Link for Symptom Checker */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
