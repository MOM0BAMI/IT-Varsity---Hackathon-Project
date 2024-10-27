// src/pages/HealthLog.js

import React, { useState, useEffect } from "react";
import { logHealthMetric, getHealthMetrics } from "../logMetrics";
import './HealthLog.css'; // Ensure you have this CSS file created

const HealthLog = () => {
  const [metricType, setMetricType] = useState("");
  const [metricValue, setMetricValue] = useState("");
  const [metrics, setMetrics] = useState([]); // State to store all logged metrics

  const handleLogMetric = async () => {
    await logHealthMetric(metricType, metricValue);
    setMetricType("");
    setMetricValue("");
    fetchMetrics(); // Retrieve all metrics after logging a new one
  };

  const fetchMetrics = async () => {
    const loggedMetrics = await getHealthMetrics();
    setMetrics(loggedMetrics); // Update state with fetched metrics
  };

  useEffect(() => {
    fetchMetrics(); // Fetch metrics when the component mounts
  }, []);

  return (
    <div className="health-log-container">
      <h2>Log Health Metric</h2>
      <input
        type="text"
        placeholder="Metric Type"
        value={metricType}
        onChange={(e) => setMetricType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Metric Value"
        value={metricValue}
        onChange={(e) => setMetricValue(e.target.value)}
      />
      <button onClick={handleLogMetric}>Log Metric</button>
      
      <h3>Logged Metrics:</h3>
      <ul>
        {metrics.map((metric, index) => (
          <li key={index}>
            {metric.type}: {metric.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthLog;
