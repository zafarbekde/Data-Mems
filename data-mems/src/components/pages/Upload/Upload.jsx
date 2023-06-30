import React, { useState } from 'react';

function Modal({ closeModal }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedText, setUploadedText] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform any necessary validation or processing of the uploaded image
    setUploadedImage(file);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setUploadedText(text);
  };

  const handleSubmit = () => {
    // Handle the submission of the uploaded image and text
    // You can access the uploaded image via `uploadedImage` state variable
    // and the uploaded text via `uploadedText` state variable
    console.log('Uploaded Image:', uploadedImage);
    console.log('Uploaded Text:', uploadedText);

    // Reset the form after submission
    setUploadedImage(null);
    setUploadedText('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Upload Image and Text</h2>
        <div className="form-group">
          <label htmlFor="imageUpload">Upload Image:</label>
          <input type="file" id="imageUpload" onChange={handleImageUpload} accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="textUpload">Enter Text:</label>
          <textarea id="textUpload" rows="4" value={uploadedText} onChange={handleTextChange} />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
