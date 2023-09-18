import React, { useState, useRef } from 'react';
import './CameraPage.css'; // Import your CSS file

function CameraPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [punchState, setPunchState] = useState('punchin'); // Initialize with 'punchout'
  const fileInputRef = useRef(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
      // Change the punch state to 'punch in' when an image is selected
      setPunchState('punch out');
    }
  };

  const togglePunchState = () => {
    // Trigger the file input to open the camera
    fileInputRef.current.click();
  };

  return (
    <div className="camera-page">
      <div className="camera-top">
        {/* Create a punch-hole area */}
        <div className="punch-hole">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="round-image"
            />
          )}
        </div>
      </div>
      <div className="camera-bottom">
        {/* Place the button at the bottom */}
        <button onClick={togglePunchState} className="image-upload-button">
          {punchState}
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="camera" // Use "camera" to open the camera
        onChange={handleImageSelect}
        className="hidden-input"
      />
    </div>
  );
}

export default CameraPage;
