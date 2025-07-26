import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [status, setStatus] = useState({ message: "", variant: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send login data to backend
      const response = await axios.post("/api/auth/login", formData);

      // If login is successful, show success message
      if (response.data.message === "Login successful") {
        setStatus({ message: "Login successful!", variant: "success" });

        // optional: store token if it exists
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }

        // navigate after a short delay so the user sees the success message
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // if backend sends other message
        setStatus({ message: "Invalid credentials", variant: "danger" });
      }
    } catch (error) {
      // handle backend error or connection issue
      setStatus({
        message: error.response?.data?.message || "Invalid credentials",
        variant: "danger"
      });
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Login</h2>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
