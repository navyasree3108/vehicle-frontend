import React, { useState } from 'react';

function BuyForm({ vehicle, onConfirm, onCancel }) {
  const [formData, setFormData] = useState({
    name: vehicle.name || "",
    fullName: '',
    phoneNumber: '',
    state: '',
    pinCode: '',
    houseNumber: '',
    areaName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    addressType: 'home',
  });

  if (!vehicle) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = async () => {
    const bookingData = { ...formData, vehicle };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Booking confirmed!");
        onConfirm(); // Close modal or show confirmation
      } else {
        alert("❌ Booking failed: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Could not submit booking. Check console.");
    }
  };

  return (
    <div className="card mt-4 p-4">
      <h5 className="card-title">Booking Form: {vehicle.brand} {vehicle.model}</h5>
      <div className="mb-3">
        <input
          name="fullName"
          className="form-control"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.fullName}
          required
        />
      </div>
      <div className="mb-3">
        <input
          name="phoneNumber"
          className="form-control"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formData.phoneNumber}
           required
        />
      </div>
      <div className="mb-3">
        <input
          name="state"
          className="form-control"
          placeholder="State"
          onChange={handleChange}
          value={formData.state}
           required
        />
      </div>
      <div className="mb-3">
        <input
          name="pinCode"
          className="form-control"
          placeholder="PIN Code"
          onChange={handleChange}
          value={formData.pinCode}
           required
        />
      </div>
      <div className="mb-3">
        <input
          name="houseNumber"
          className="form-control"
          placeholder="House Number"
          onChange={handleChange}
          value={formData.houseNumber}
           required
        />
      </div>
      <div className="mb-3">
        <input
          name="areaName"
          className="form-control"
          placeholder="Area Name"
          onChange={handleChange}
          value={formData.areaName}
           required
        />
      </div>
      <div className="mb-3">
    <label>Card Number</label>
    <input
      type="text"
      className="form-control"
      value={formData.cardNumber}
      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
      required
    />
  </div>

  <div className="mb-3">
    <label>Expiry Date</label>
    <input
      type="text"
      className="form-control"
      placeholder="MM/YY"
      value={formData.expiryDate}
      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
      required
    />
  </div>

  <div className="mb-3">
    <label>CVV</label>
    <input
      type="password"
      className="form-control"
      value={formData.cvv}
      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
      required
    />
  </div>
      <div className="mb-3">
        <select
          name="addressType"
          className="form-select"
          onChange={handleChange}
          value={formData.addressType}
        >
          <option value="home">Home</option>
          <option value="work">Work</option>
        </select>
      </div>
      <div>
        <button className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
        <button className="btn btn-success" onClick={handleConfirm}>Confirm Booking</button>
      </div>
    </div>
  );
}

export default BuyForm;
