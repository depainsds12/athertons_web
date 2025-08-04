import React, { useState } from 'react';

const Popup = ({ message, onClose }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = () => {
//     // Your submit logic here
//     setShowPopup(true);
    
//     // Hide the popup after 3 seconds
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 4000);
//   };

  return (
      <div className="fixed inset-0 bg-opacity-50 flex justify-center items-start pt-10 z-50">
      <div className="bg-[#03837E] p-6 rounded-lg shadow-lg max-w-md w-full mx-4 animate-fade-in">
        <div className="flex justify-between items-center">
           <p className="text-white text-[20px] font-medium">{message}</p>
          {/* <h3 className="text-lg font-semibold text-white">Success</h3> */}
          <button 
            onClick={onClose}
            className="text-white cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
       
        
      </div>
    </div>
  );
};

export default Popup;