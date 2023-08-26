import React from 'react';

function Popup({ onClose }) {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid black',
      padding: '20px',
      backgroundColor: 'white'
    }}>
      <p>This is the popup content.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Popup;
