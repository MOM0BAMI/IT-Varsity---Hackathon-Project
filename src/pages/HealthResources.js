// src/HealthResources.js

import React from 'react';
import './HealthResources.css'; // Import a separate CSS file for styling

const resources = [
  {
    title: 'Understanding Blood Pressure',
    description: 'Learn about what blood pressure is and how to manage it.',
    link: 'https://example.com/blood-pressure'
  },
  {
    title: 'Healthy Eating Tips',
    description: 'Discover tips for maintaining a balanced diet.',
    link: 'https://example.com/healthy-eating'
  },
  // Add more resources here
];

const HealthResources = () => {
  return (
    <div className="health-resources-container">
      <h1 className="resources-title">Health Education Resources and Tips</h1>
      <ul className="resources-list">
        {resources.map((resource, index) => (
          <li key={index} className="resource-item">
            <h2 className="resource-title">{resource.title}</h2>
            <p className="resource-description">{resource.description}</p>
            <a 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resource-link"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthResources;
