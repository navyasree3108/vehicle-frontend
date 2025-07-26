import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

function BookVehicle() {
  const [formData, setFormData] = useState({
    email: "",
    vehicleType: "Car",
    date: "",
    message: ""
  });
  const [status, setStatus] = useState({ message: "", variant: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/bookings", {
        email: formData.email,
        vehicleType: formData.vehicleType,
        date: formData.date,
        message: formData.message
      });
      
      setStatus({
        message: `Your ${formData.vehicleType} booking request has been submitted!`,
        variant: "success"
      });
      setFormData({
        email: "",
        vehicleType: "Car",
        date: "",
        message: ""
      });
    } catch (error) {
      setStatus({
        message: "Booking failed. Please try again.",
        variant: "danger"
      });
    }
  };

  return (
    <section className="py-5 bg-light" id="book">
      <Container>
        <h2 className="text-center mb-4">Book Your Vehicle</h2>
        {status.message && <Alert variant={status.variant}>{status.message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
            >
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Lorry">Lorry</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Preferred Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional requirements?"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Book Now
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default BookVehicle;