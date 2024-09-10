import React from 'react';

const ProgressBar = ({ progress, message }) => {
  return (
    <div>
      <div style={{ width: '100%', backgroundColor: '#f3f3f3', border: '1px solid #ccc' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '30px',
            backgroundColor: '#4caf50',
            textAlign: 'center',
            lineHeight: '30px',
            color: 'white',
          }}
        >
          {progress}%
        </div>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ProgressBar;
