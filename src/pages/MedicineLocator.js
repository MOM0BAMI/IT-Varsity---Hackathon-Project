// src/pages/MedicineLocator.js

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MedicineLocator.css';

const MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API Key

const MedicineLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyResources, setNearbyResources] = useState([]);

  // Fetch user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error("Error fetching location:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  // Fetch nearby pharmacies or resources based on user's location
  useEffect(() => {
    if (userLocation) {
      // Mocked data for nearby resources, replace with actual API call
      setNearbyResources([
        { id: 1, name: 'Pharmacy A', location: { lat: userLocation.lat + 0.001, lng: userLocation.lng + 0.001 } },
        { id: 2, name: 'Health Center B', location: { lat: userLocation.lat - 0.001, lng: userLocation.lng - 0.001 } },
        // Add more resources as needed
      ]);
    }
  }, [userLocation]);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultCenter = userLocation || { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco if location is unavailable

  return (
    <div className="medicine-locator-container">
      <h1>Medicine and Resource Locator</h1>
      <p>Find pharmacies and health resources near you.</p>

      <LoadScript googleMapsApiKey={MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={14}
        >
          {userLocation && <Marker position={userLocation} label="You" />}
          {nearbyResources.map((resource) => (
            <Marker
              key={resource.id}
              position={resource.location}
              label={resource.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MedicineLocator;
