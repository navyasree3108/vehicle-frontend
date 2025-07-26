import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import bike1 from "../images/bike1.jpg";
import bike2 from "../images/bike2.jpg";
import bike3 from "../images/bike3.jpg";
import bike4 from "../images/bike4.jpg";

const bikes = [
  { id: 1, src: bike1, alt: "Sport Bike" },
  { id: 2, src: bike2, alt: "Mountain Bike" },
  { id: 3, src: bike3, alt: "Road Bike" },
  { id: 4, src: bike4, alt: "Vintage Bike" },
];

function BikeGallery() {
  return (
    <section className="vehicle-section" aria-label="Bike gallery">
      <Container>
        <h2>Bikes</h2>
        <Row>
          {bikes.map((bike) => (
            <Col md={3} sm={6} xs={12} key={bike.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={bike.src} alt={bike.alt} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BikeGallery;
