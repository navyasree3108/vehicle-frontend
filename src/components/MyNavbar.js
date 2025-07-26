import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      {/* Top Bar */}
      <div
        className="px-3 py-1 small text-white"
        style={{ backgroundColor: "#6a0dad" }}
      >
        <div className="d-flex justify-content-end align-items-center gap-2">
          <span>📞 +123456789</span>
          <Link to="/login" className="text-white text-decoration-none fw-bold">
            Login
          </Link>
          <span>|</span>
          <Link to="/signup" className="text-white text-decoration-none fw-bold">
            Register
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#4b0082",
          height: "70px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)"
        }}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "1.8rem",
              color: "#FFD700"
            }}
          >
            🚗 Vehicle Marketplace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-white fw-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/buy" className="text-white fw-bold">Buy</Nav.Link>
              <Nav.Link as={Link} to="/sell" className="text-white fw-bold">Sell</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white fw-bold">About</Nav.Link>
              <Nav.Link as={Link} to="/vehicles" className="text-white fw-bold">Vehicles</Nav.Link>
              <Nav.Link as={Link} to="/dealers" className="text-white fw-bold">Dealers</Nav.Link>
              

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
