// src/pages/UserMedicalInfo.js

import React, { useState } from 'react';
import './UserMedicalInfo.css';
import { addPatientData } from '../utils/indexedDB'; // Import your IndexedDB utility

function UserMedicalInfo({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    medicalConditions: '',
    medications: '',
    allergies: '',
  });
  
  const [message, setMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit prop with the form data
    
    try {
      await addPatientData(formData); // Save to IndexedDB
      setMessage('User medical information submitted successfully!'); // Set success message
      setFormData({ // Optionally clear the form
        name: '',
        age: '',
        gender: '',
        medicalConditions: '',
        medications: '',
        allergies: '',
      });
    } catch (error) {
      setMessage('Error saving data: ' + error); // Set error message
    }
  };

  return (
    <div className="medical-info-container">
      <h1>User Medical Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="medicalConditions">Medical Conditions:</label>
        <textarea
          name="medicalConditions"
          id="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
        />
        <label htmlFor="medications">Medications:</label>
        <textarea
          name="medications"
          id="medications"
          value={formData.medications}
          onChange={handleChange}
        />
        <label htmlFor="allergies">Allergies:</label>
        <textarea
          name="allergies"
          id="allergies"
          value={formData.allergies}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Display success message */}
    </div>
  );
}

export default UserMedicalInfo;
