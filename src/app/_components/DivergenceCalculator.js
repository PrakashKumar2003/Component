import { useState } from 'react';

const DivergenceCalculator = () => {
  const [formData, setFormData] = useState({
    distance: '',
    laser1Power: '',
    laser1Divergence: '',
    laser1Aperture: '',
    laser2Power: '',
    laser2Divergence: '',
    laser2Aperture: '',
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const distance = parseFloat(formData.distance);
    const laser1Divergence = parseFloat(formData.laser1Divergence);
    const laser1Aperture = parseFloat(formData.laser1Aperture);
    const laser1Power = parseFloat(formData.laser1Power);
    const laser2Divergence = parseFloat(formData.laser2Divergence);
    const laser2Aperture = parseFloat(formData.laser2Aperture);
    const laser2Power = parseFloat(formData.laser2Power);

    // Perform calculations
    const laser1Diameter = distance * laser1Divergence + laser1Aperture;
    const laser2Diameter = distance * laser2Divergence + laser2Aperture;

    const laser1Area = Math.PI * Math.pow(laser1Diameter / 2, 2);
    const laser2Area = Math.PI * Math.pow(laser2Diameter / 2, 2);

    const laser1Intensity = laser1Power / laser1Area;
    const laser2Intensity = laser2Power / laser2Area;

    setResults({
      laser1Diameter: laser1Diameter.toFixed(2),
      laser2Diameter: laser2Diameter.toFixed(2),
      laser1Area: laser1Area.toFixed(2),
      laser2Area: laser2Area.toFixed(2),
      laser1Intensity: laser1Intensity.toFixed(8),
      laser2Intensity: laser2Intensity.toFixed(8),
    });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#1e1e1e', color: '#ccc' }}>
      <h2>Divergence Calculator</h2>
      <p>
        The beam divergence describes the widening of the beam over the distance.
        It is defined in milliradiant (mrad), which usually describes a part of the circumference.
        Generally speaking, it is best to have a divergence as small as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="distance">Distance [m]:</label>
          <input
            id="distance"
            type="number"
            value={formData.distance}
            onChange={handleChange}
          />
        </div>

        <div>
          <h3>Laser 1:</h3>
          <label htmlFor="laser1Power">Power [mW]:</label>
          <input
            id="laser1Power"
            type="number"
            value={formData.laser1Power}
            onChange={handleChange}
          />
          <label htmlFor="laser1Divergence">Divergence [mrad]:</label>
          <input
            id="laser1Divergence"
            type="number"
            value={formData.laser1Divergence}
            onChange={handleChange}
          />
          <label htmlFor="laser1Aperture">Diameter at aperture [mm]:</label>
          <input
            id="laser1Aperture"
            type="number"
            value={formData.laser1Aperture}
            onChange={handleChange}
          />
        </div>

        <div>
          <h3>Laser 2:</h3>
          <label htmlFor="laser2Power">Power [mW]:</label>
          <input
            id="laser2Power"
            type="number"
            value={formData.laser2Power}
            onChange={handleChange}
          />
          <label htmlFor="laser2Divergence">Divergence [mrad]:</label>
          <input
            id="laser2Divergence"
            type="number"
            value={formData.laser2Divergence}
            onChange={handleChange}
          />
          <label htmlFor="laser2Aperture">Diameter at aperture [mm]:</label>
          <input
            id="laser2Aperture"
            type="number"
            value={formData.laser2Aperture}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {results && (
        <div>
          <h3>Results:</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ backgroundColor: '#ff6347', padding: '10px', width: '45%' }}>
              <h4>Laser 1:</h4>
              <p>Beam diameter after {formData.distance}m: {results.laser1Diameter} mm</p>
              <p>Area of laser point after {formData.distance}m: {results.laser1Area} mm²</p>
              <p>Laser intensity after {formData.distance}m: {results.laser1Intensity} mW/mm²</p>
            </div>
            <div style={{ backgroundColor: '#32cd32', padding: '10px', width: '45%' }}>
              <h4>Laser 2:</h4>
              <p>Beam diameter after {formData.distance}m: {results.laser2Diameter} mm</p>
              <p>Area of laser point after {formData.distance}m: {results.laser2Area} mm²</p>
              <p>Laser intensity after {formData.distance}m: {results.laser2Intensity} mW/mm²</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DivergenceCalculator;
