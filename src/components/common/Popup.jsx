import React, { useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    // Your submit logic here
    setShowPopup(true);
    
    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <div className="relative">
      {/* Submit Button */}
      <button 
        className="px-5 py-2.5 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors cursor-pointer text-base"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center pt-10 z-50">
          {/* Popup Content */}
          <div className="bg-white p-5 rounded-lg shadow-lg animate-fade-in">
            <p className="text-lg font-medium">Details Submitted Successfully</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;