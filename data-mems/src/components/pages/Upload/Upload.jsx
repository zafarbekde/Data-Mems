import React from 'react';
import './upload.css'

function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Add content for the modal, including the image upload functionality */}
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
