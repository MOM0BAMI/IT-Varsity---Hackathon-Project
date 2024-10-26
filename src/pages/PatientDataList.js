// src/pages/PatientDataList.js

import React, { useEffect, useState } from 'react';
import { getPatientData } from '../utils/indexedDB';

function PatientDataList() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPatientData(); // Retrieve patient data
                setPatients(data); // Update state with retrieved data
            } catch (err) {
                setError(err); // Handle error
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        fetchData(); // Call the fetch function
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Display loading message
    }

    if (error) {
        return <p>{error}</p>; // Display error message
    }

    return (
        <div>
            <h1>Patient Data</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Gender:</strong> {patient.gender}
                        {/* Add other fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatientDataList;
