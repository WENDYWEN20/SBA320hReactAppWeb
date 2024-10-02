import React, { useState } from "react";
import axios from "axios";

function ModelPredict() {
  const [inputs, setInputs] = useState({
    Area: 0,
    Area_P: 0,
    Height: 0,
    Width: 0,
    USP_Resolution: 0,
    Asym_10: 0,
    Asym: 0,
    USP_Tailing: 0,
    USP_Plate_Count: 0,
    Width_Baseline: 0,
    Width_Tang: 0,
    Width_5: 0,
    Width_50: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/predict", inputs);
      console.log(response.data);
    } catch (error) {
      console.error("Error with prediction:", error);
    }
  };

  return (
    <div>
      <h2>Enter the value of Column Tested</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(inputs).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="number"
              name={key}
              value={inputs[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Predict</button>
      </form>
    </div>
  );
}

export default ModelPredict;