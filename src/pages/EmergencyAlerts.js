// src/pages/EmergencyAlerts.js
import React from 'react';

const EmergencyAlerts = () => {
  return (
    <div className="emergency-alerts">
      <h1>Emergency Alerts</h1>
      <p>In case of an emergency, please contact the following hotlines:</p>
      <ul>
        <li><strong>Emergency Services:</strong> 911</li>
        <li><strong>Health Hotline:</strong> 1-800-123-4567</li>
        <li><strong>Mental Health Support:</strong> 1-800-987-6543</li>
      </ul>

      <h2>What to Do in an Emergency</h2>
      <p>Here are some important tips to keep in mind during an emergency:</p>
      <ul>
        <li><strong>Stay Calm:</strong> Take a deep breath and try to remain calm.</li>
        <li><strong>Assess the Situation:</strong> Determine the nature of the emergency.</li>
        <li><strong>Call for Help:</strong> Use the emergency hotline to get assistance.</li>
        <li><strong>Provide Details:</strong> Clearly explain the situation to the operator.</li>
        <li><strong>Follow Instructions:</strong> Listen carefully and follow any instructions given by emergency personnel.</li>
      </ul>

      <h2>Stay Updated</h2>
      <p>Stay tuned for any alerts regarding health emergencies or safety concerns:</p>
      <div className="updates">
        <p><strong>Alert:</strong> A flu outbreak has been reported in the area. Please take precautions!</p>
        <p><strong>Tip:</strong> Get your flu vaccine to protect yourself and others.</p>
      </div>

      <h2>Emergency Preparedness Resources</h2>
      <p>Consider preparing an emergency kit that includes:</p>
      <ul>
        <li>First aid supplies</li>
        <li>Flashlights and batteries</li>
        <li>Non-perishable food and water</li>
        <li>Personal medications</li>
        <li>Emergency contact information</li>
      </ul>
    </div>
  );
};

export default EmergencyAlerts;
