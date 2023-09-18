import React, { useState } from 'react';

function Geo() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
  
    const handleGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }, (error) => {
          console.error("Error getting geolocation:", error);
        });
      } else {
        console.error("Geolocation is not supported in this browser.");
      }
    };
  
    return (
      <div>
        <h1>Geolocation</h1>
        <button onClick={handleGeoLocation}>Get Geolocation</button>
        {latitude !== null && longitude !== null && (
          <div>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Geo;
  
 
