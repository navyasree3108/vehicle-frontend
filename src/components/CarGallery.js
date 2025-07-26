import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";

const cars = [
  { id: 1, src: car1 },
  { id: 2, src: car2},
  { id: 3, src: car3},
  { id: 4, src: car4 },
];

function CarGallery() {
  return (
    <section className="vehicle-section" aria-label="Car gallery">
      <Container>
        <h2>Cars</h2>
        <Row>
          {cars.map((car) => (
            <Col md={3} sm={6} xs={12} key={car.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={car.src} alt={car.alt} />
                <Card.Body>
                  <Card.Title>{car.alt}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CarGallery;