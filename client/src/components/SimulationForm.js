import React, { useState } from 'react';

const SimulationForm = ({ onSimulationStart }) => {
  const [formData, setFormData] = useState({
    length: '1.0',
    width: '0.1',
    youngs_modulus: '210E9',
    poissons_ratio: '0.3',
    force: '1000',
    plot_method: 'matplotlib',
  });
  const [cadFile, setCadFile] = useState(null); // State to hold the CAD file

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setCadFile(e.target.files[0]); // Store the selected file in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSimulationStart(formData, cadFile); // Pass both formData and cadFile to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Upload CAD File (STEP):
        <input type="file" accept=".stp, .step" onChange={handleFileChange} />
      </label>	  
      <br />
      <label>
        Young's Modulus (Pa):
        <input
          type="number"
          name="youngs_modulus"
          value={formData.youngs_modulus}
          onChange={handleChange}
          step="any"
          required
        />
      </label>
      <br />
      <label>
        Poisson's Ratio:
        <input
          type="number"
          name="poissons_ratio"
          value={formData.poissons_ratio}
          onChange={handleChange}
          step="any"
          required
        />
      </label>  
      <br />
      <label>
        Force (N):
        <input
          type="number"
          name="force"
          value={formData.force}
          onChange={handleChange}
          step="any"
          required
        />
      </label>
      <br />
      <button type="submit">Run Simulation</button>
    </form>
  );
};

export default SimulationForm;
