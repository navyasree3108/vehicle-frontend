import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const brands = [
  { id: 1, name: "Toyota" },
  { id: 2, name: "Mercedes" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Ferrari" },
  { id: 5, name: "Lexus" },
  { id: 6, name: "Nissan" }
];

function Brands() {
  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Our Top Quality Brands</h2>
        <Row className="justify-content-center">
          {brands.map((brand) => (
            <Col md={2} sm={4} xs={6} key={brand.id} className="mb-3">
              <div className="bg-white p-3 text-center shadow-sm rounded">
                {brand.name}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Brands;