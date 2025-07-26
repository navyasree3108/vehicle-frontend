import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("👉 Form submission triggered");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("✅ Signup success:", res.data);
      alert("✅ Registered successfully!");
    } catch (error) {
      console.error("❌ Signup failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Please check the backend.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
