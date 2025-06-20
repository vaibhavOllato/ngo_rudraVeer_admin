import React, { useState, useEffect, useRef } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Show the modal when the page loads
  useEffect(() => {
    setShowModal(true);
  }, []);

  // Close the modal if clicked outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Let’s invest in India by helping girls complete their education
            </h2>
            <p className="text-gray-700 mb-4">
              Join the{' '}
              <span className="font-bold">#Empower Her Future, Educate a Nation. Your Donation Can Change Lives!</span>{' '}
              movement today.
            </p>
            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(false)}
            >
              Donate now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
