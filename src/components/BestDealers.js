import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import dealer1 from "../images/dealer1.jpg";
import dealer2 from "../images/dealer2.jpg";
import dealer3 from "../images/dealer3.jpg";

const dealers = [
  {
    id: 1,
    name: "Luxury Car Dealer",
    image: dealer1,
    alt: "Luxury Car Dealer"
  },
  {
    id: 2,
    name: "Premium Bike Dealer",
    image: dealer2,
    alt: "Premium Bike Dealer"
  },
  {
    id: 3,
    name: "Heavy Trucks Dealer",
    image: dealer3,
    alt: "Heavy Trucks Dealer"
  }
];


function BestDealers() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Best Dealers in the City</h2>
      <Row>
        {dealers.map((dealer) => (
          <Col md={4} key={dealer.id}>
            <Card className="shadow-sm mb-4 h-100">
              <Card.Img variant="top" src={dealer.image} alt={dealer.alt} />
              <Card.Body>
                <Card.Title>{dealer.name}</Card.Title>
                <Card.Text>
                  Offering the best deals with trusted service and years of experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BestDealers;
