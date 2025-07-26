import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import lorry1 from "../images/lorry1.jpg";
import lorry2 from "../images/lorry2.jpg";
import lorry3 from "../images/lorry3.jpg";
import lorry4 from "../images/lorry4.jpg";

const lorries = [
  { id: 1, src: lorry1, alt: "Heavy Duty Lorry" },
  { id: 2, src: lorry2, alt: "Delivery Truck" },
  { id: 3, src: lorry3, alt: "Container Truck" },
  { id: 4, src: lorry4, alt: "Refrigerated Truck" },
];

function LorryGallery() {
  return (
    <section className="vehicle-section" aria-label="Lorry gallery">
      <Container>
        <h2>Lorries</h2>
        <Row>
          {lorries.map((lorry) => (
            <Col md={3} sm={6} xs={12} key={lorry.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={lorry.src} alt={lorry.alt} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LorryGallery;
