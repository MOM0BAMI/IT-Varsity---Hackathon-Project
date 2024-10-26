// src/components/PatientDataDisplay.js

import React, { useEffect, useState } from 'react';
import { getPatientData } from '../utils/indexedDB';

const PatientDataDisplay = () => {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);

    const fetchPatients = async () => {
        try {
            const data = await getPatientData();
            setPatients(data);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    if (error) {
        return <p>Error retrieving patient data: {error}</p>;
    }

    return (
        <div>
            <h2>Patient Data</h2>
            {patients.length > 0 ? (
                <ul>
                    {patients.map((patient) => (
                        <li key={patient.id}>
                            <strong>Name:</strong> {patient.name}, 
                            <strong> Age:</strong> {patient.age}, 
                            <strong> Gender:</strong> {patient.gender}
                            {/* Add more fields as needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No patient data available.</p>
            )}
        </div>
    );
};

export default PatientDataDisplay;
