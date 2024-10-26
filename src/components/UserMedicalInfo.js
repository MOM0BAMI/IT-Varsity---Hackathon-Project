import React, { useState } from 'react';
import './UserMedicalInfo.css'; // Ensure this file exists for styling

function UserMedicalInfo({ onSubmit }) { // Accept onSubmit prop
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    medicalConditions: '',
    medications: '',
    allergies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit prop with the form data
    onSubmit(formData);
  };

  return (
    <div className="medical-info-container">
      <h1>User Medical Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Medical Conditions:
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
          />
        </label>
        <label>
          Medications:
          <textarea
            name="medications"
            value={formData.medications}
            onChange={handleChange}
          />
        </label>
        <label>
          Allergies:
          <textarea
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserMedicalInfo;
