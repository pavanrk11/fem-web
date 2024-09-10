
import React from 'react';

const Results = () => {
  return (
    <div className="results-container">
      {/* <h1>Simulation Results</h1>
      <div className="results-grid">
        <div className="result-item">
          <h2>Displacement</h2>
          <img
            src="/static/output/displacement.png"
            alt="Displacement Plot"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="result-item">
          <h2>Von Mises Stress</h2>
          <img
            src="/static/output/von_mises_stress.png"
            alt="Von Mises Stress Plot"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div> */}
      <br />
      <a href="/">Run another simulation</a>
    </div>
  );
};

export default Results;
