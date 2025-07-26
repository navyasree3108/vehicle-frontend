import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

function Notifications() {
  const [formData, setFormData] = useState({
    emailTo: "",
    smsTo: "",
    message: ""
  });
  const [status, setStatus] = useState({ message: "", variant: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendNotification = async (type) => {
    try {
      const endpoint = `/api/notifications/${type}`;
      const payload = type === 'email' 
        ? { to: formData.emailTo, subject: "Notification", text: formData.message }
        : { to: formData.smsTo, text: formData.message };

      await axios.post(endpoint, payload);
      setStatus({ message: `${type.toUpperCase()} sent successfully!`, variant: "success" });
    } catch (error) {
      setStatus({ message: `Failed to send ${type}.`, variant: "danger" });
    }
  };

  return (
    <Container>
      <h2>Notifications</h2>
      {status.message && <Alert variant={status.variant}>{status.message}</Alert>}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email To</Form.Label>
          <Form.Control
            type="email"
            name="emailTo"
            value={formData.emailTo}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>SMS To</Form.Label>
          <Form.Control
            type="tel"
            name="smsTo"
            value={formData.smsTo}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={() => sendNotification('email')} className="me-2">
          Send Email
        </Button>
        <Button variant="primary" onClick={() => sendNotification('sms')}>
          Send SMS
        </Button>
      </Form>
    </Container>
  );
}

export default Notifications;