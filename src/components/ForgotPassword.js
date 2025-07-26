import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ message: "", variant: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/forgot-password", { email });
      setStatus({
        message: "If an account exists with this email, a reset link has been sent.",
        variant: "success"
      });
    } catch (error) {
      setStatus({
        message: "Error sending reset link. Please try again later.",
        variant: "danger"
      });
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Forgot Password</h2>
      {status.message && <Alert variant={status.variant}>{status.message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your registered email"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Send Reset Link
        </Button>
      </Form>
    </Container>
  );
}

export default ForgotPassword;