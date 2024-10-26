import React from 'react';
import './EmergencyContact.css';

const EmergencyContact = () => {
  const handleCall = (number) => {
    window.open(`tel:${number}`);
  };

  return (
    <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <ul>
        <li>
          <strong>Emergency Services:</strong> 
          <span>911</span>
          <button onClick={() => handleCall('911')}>Call</button>
        </li>
        <li>
          <strong>Health Hotline:</strong> 
          <span>1-800-123-4567</span>
          <button onClick={() => handleCall('1-800-123-4567')}>Call</button>
        </li>
        <li>
          <strong>Mental Health Support:</strong> 
          <span>1-800-987-6543</span>
          <button onClick={() => handleCall('1-800-987-6543')}>Call</button>
        </li>
      </ul>
      <h3>Emergency Instructions</h3>
      <p>In case of a medical emergency, call emergency services immediately. For other concerns, reach out to the appropriate hotline above.</p>
    </div>
  );
};

export default EmergencyContact;
