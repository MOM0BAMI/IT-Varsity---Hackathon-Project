// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import UserMedicalInfo from './pages/UserMedicalInfo';
import PatientDataDisplay from './components/PatientDataDisplay';
import EmergencyAlerts from './pages/EmergencyAlerts';
import EmergencyContact from './pages/EmergencyContact';
import SymptomChecker from './pages/SymptomChecker';
import HealthLog from './pages/HealthLog'; 
import HealthResources from './pages/HealthResources';
import MedicineLocator from './pages/MedicineLocator';
import Chatbot from './pages/Chatbot'; // Import the Chatbot component
import './styles/App.css';

function App() {
  const [userMedicalData, setUserMedicalData] = useState(null);

  const handleMedicalInfoSubmit = (data) => {
    setUserMedicalData(data);
    console.log('User Medical Information submitted:', data);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/user-medical-info" element={<UserMedicalInfo onSubmit={handleMedicalInfoSubmit} />} />
          <Route path="/patient-data" element={<PatientDataDisplay />} />
          <Route path="/emergency-alerts" element={<EmergencyAlerts />} />
          <Route path="/emergency-contact" element={<EmergencyContact />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/health-log" element={<HealthLog />} />
          <Route path="/health-resources" element={<HealthResources />} />
          <Route path="/medicine-locator" element={<MedicineLocator />} />
          <Route path="/chatbot" element={<Chatbot />} /> {/* Added Chatbot route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
