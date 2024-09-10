import React, { useState } from 'react';
import SimulationForm from './components/SimulationForm';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import './App.css'; // Import the new CSS file

function App() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Waiting to start...');
  const [results, setResults] = useState(null);

  const startSimulation = async (formData, cadFile) => {
    setProgress(0);
    setMessage('Starting simulation...');

    // Handle CAD file upload if it exists
    let cadFilePath = '';
    if (cadFile) {
      const uploadData = new FormData();
      uploadData.append('cad_file', cadFile);

      const uploadResponse = await fetch('/upload_cad', {
        method: 'POST',
        body: uploadData,
      });

      const uploadResult = await uploadResponse.json();
      if (uploadResponse.ok) {
        cadFilePath = uploadResult.file_path; // Store the uploaded file path
      } else {
        alert('Error uploading CAD file: ' + uploadResult.message);
        return; // Stop if the upload fails
      }
    }

    // Send form data including the CAD file path if available
    const simulationData = new URLSearchParams(formData);
    if (cadFilePath) {
      simulationData.append('cad_file_path', cadFilePath);
    }

    fetch('/run_simulation', {
      method: 'POST',
      body: simulationData,
    })
      .then((response) => {
        if (response.status === 202) {
          checkProgress();
        } else {
          response.json().then((data) => alert('Error: ' + data.message));
        }
      })
      .catch((error) => {
        console.error('Error starting simulation:', error);
      });
  };

  const checkProgress = () => {
    fetch('/progress')
      .then((response) => response.json())
      .then((data) => {
        setProgress(data.progress);
        setMessage(data.message);

        if (data.progress < 100) {
          setTimeout(checkProgress, 1000);
        } else {
          fetchResults();
        }
      })
      .catch((error) => {
        console.error('Error fetching progress:', error);
      });
  };

  const fetchResults = () => {
    fetch('/results')
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error('Error fetching results:', error);
      });
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1>FEM Simulation</h1>
        {!results && (
          <>
            <SimulationForm onSimulationStart={startSimulation} />
            <ProgressBar progress={progress} message={message} />
          </>
        )}
        {results && (
          <Results
            displacementImg={results.displacement_image}
            stressImg={results.stress_image}
          />
        )}
      </div>
    </div>
  );
}

export default App;