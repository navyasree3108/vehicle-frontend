import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* About Us */}
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We provide the best vehicle rental experience with top-quality cars, bikes, and trucks.
              Book easily, ride safely, and enjoy affordable rates with trusted dealers.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/vehicles" className="text-light text-decoration-none">Vehicles</Link></li>
              <li><Link to="/dealers" className="text-light text-decoration-none">Dealers</Link></li>
          
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-3">
            <h5>Contact Info</h5>
            <address>
              📍 123 Vehicle Street, Auto City<br />
              📞 +1 (555) 123-4567<br />
              ✉️ info@vehiclebooking.com
            </address>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} Vehicle Booking. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
