// src/pages/Sell.js
import React, { useState } from "react";
import axios from "axios";

function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    model: "",
    year: "",
    fuel: "",
    transmission: "",
    description: "",
    image: null, // for file upload
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await axios.post("http://localhost:5000/api/vehicles", data);
      console.log("Submitted:", res.data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sell Your Vehicle</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-50" encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Vehicle Name</label>
            <input type="text" className="form-control" name="name" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Type</label>
            <input type="text" className="form-control" name="type" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Model</label>
            <input type="text" className="form-control" name="model" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Year</label>
            <input type="number" className="form-control" name="year" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Fuel Type</label>
            <input type="text" className="form-control" name="fuel" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Transmission</label>
            <input type="text" className="form-control" name="transmission" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" name="price" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" className="form-control" name="image" accept="image/*" onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      ) : (
        <div className="alert alert-success">
          Vehicle <strong>{formData.name}</strong> sold successfully!
        </div>
      )}
    </div>
  );
}

export default Sell;
