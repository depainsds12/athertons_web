import React, { useEffect, useRef } from 'react';

const Popup = ({ message, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-start pt-2 z-50">
      <div
        ref={popupRef}
        className="bg-[#03837E] p-3 rounded-lg shadow-lg max-w-sm w-full mx-4 animate-fade-in"
      >
        <div className="flex justify-between items-center">
          <p className="text-white text-[16px] font-medium">{message}</p>
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
