import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    type: "Car",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1752585990087/front-left-side-47.jpg?tr=w-664",
    alt: "Luxury car",
    desc: "Find your perfect car from a wide range of brands and models.",
    features: ["Sedan", "SUV", "Sports", "Electric"]
  },
  {
    id: 2,
    type: "Bike",
    image: "https://autoloanandfinancing.car.blog/wp-content/uploads/2020/04/bajaj-pulsar-150-dts.jpg",
    alt: "Racing bike",
    desc: "Explore our collection of sporty and stylish bikes.",
    features: ["Sport", "Cruiser", "Adventure", "Electric"]
  },
  {
    id: 3,
    type: "Lorry",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/433099233/KR/JH/VL/121175547/full-truck-load-transport-service.jpg",
    alt: "Heavy lorry",
    desc: "Choose from powerful lorries for heavy duty work.",
    features: ["Flatbed", "Container", "Refrigerated", "Dumper"]
  }
];

function VehicleSelector() {
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

  const handleBrowse = () => {
    if (selectedType === "Car") {
      navigate("/browse-cars");
    } else if (selectedType === "Bike") {
      navigate("/browse-bikes");
    } else if (selectedType === "Lorry") {
      navigate("/browse-lorries");
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Select Vehicle Type</h2>
      <Row className="g-4">
        {vehicles.map((vehicle) => (
          <Col md={4} key={vehicle.id}>
            <Card
              className={`h-100 shadow-sm ${selectedType === vehicle.type ? "border-primary border-2" : ""}`}
              onClick={() => setSelectedType(vehicle.type)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src={vehicle.image} alt={vehicle.alt} />
              <Card.Body>
                <Card.Title>{vehicle.type}</Card.Title>
                <Card.Text>{vehicle.desc}</Card.Text>
                <ul className="mb-3">
                  {vehicle.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button
                  variant={selectedType === vehicle.type ? "primary" : "outline-primary"}
                  className="w-100"
                >
                  {selectedType === vehicle.type ? "Selected" : "Select"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <p className="lead">You selected: <strong>{selectedType}</strong></p>
        <Button variant="success" size="lg" onClick={handleBrowse}>
          Browse {selectedType}
        </Button>
      </div>
    </Container>
  );
}

export default VehicleSelector;
