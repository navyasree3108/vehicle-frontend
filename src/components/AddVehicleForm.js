import React, { useState } from 'react';
import axios from 'axios';

const AddVehicleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/vehicles", formData);
      alert("Vehicle added successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Failed to add vehicle");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Vehicle Name" onChange={handleChange} required /><br />
        <input type="text" name="type" placeholder="Type (Car/Bike/Lorry)" onChange={handleChange} required /><br />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required /><br />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} required /><br />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required /><br />
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicleForm;
