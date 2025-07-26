import React, { useState } from "react";
import BuyForm from "../BuyForm"; // if BuyForm.js is in src folder
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const bikeModels = [
   {
    id: 1,
    name: "Royal Enfield Classic 350",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/183389/classic-350-right-front-three-quarter-2.jpeg?isig=0",
    info: "Retro-styled iconic bike.",
    details: {
      price: "₹2,00,000", modelYear: "2023", mileage: "35 km/l", vin: "RECLASSIC2023VIN001",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 2,
    name: "Yamaha R15 V4",
    image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/147651/yamaha-r15-right-front-three-quarter1.jpeg?isig=0&q=80",
    info: "Sporty 155cc bike with aggressive styling.",
    details: {
      price: "₹1,85,000", modelYear: "2023", mileage: "40 km/l", vin: "YAMR152023VIN002",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 3,
    name: "TVS Apache RTR 160",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tvs-apache-160-rm-drum-black-edition1732629216165.jpg?q=80",
    info: "Streetfighter-style with performance.",
    details: {
      price: "₹1,25,000", modelYear: "2023", mileage: "45 km/l", vin: "TVSAPACHE2023VIN003",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 4,
    name: "Bajaj Pulsar NS200",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/bajaj-select-model-pewter-grey-1709101653302.png?q=80",
    info: "Naked sports bike with good pickup.",
    details: {
      price: "₹1,45,000", modelYear: "2023", mileage: "40 km/l", vin: "BAJNS2002023VIN004",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 5,
    name: "Honda Shine 125",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45481/shine-right-side-view-10.jpeg?isig=0",
    info: "Reliable and fuel-efficient commuter.",
    details: {
      price: "₹82,000", modelYear: "2023", mileage: "55 km/l", vin: "HONDASHINE2023VIN005",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 6,
    name: "KTM Duke 200",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ktm-duke-200-standard1732631072395.jpg?q=80",
    info: "High performance and lightweight street bike.",
    details: {
      price: "₹1,90,000", modelYear: "2023", mileage: "35 km/l", vin: "KTMDUKE2002023VIN006",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 7,
    name: "Hero Splendor Plus",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--drum-brake-obd-2b1744875559407.jpg?q=80",
    info: "Most popular Indian commuter bike.",
    details: {
      price: "₹75,000", modelYear: "2023", mileage: "60 km/l", vin: "HERO2023VIN007",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 8,
    name: "Suzuki Gixxer SF",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--ride-connect-obd-2b1742989550749.jpg?q=80",
    info: "Fully faired stylish 155cc bike.",
    details: {
      price: "₹1,38,000", modelYear: "2023", mileage: "45 km/l", vin: "SUZUKIGIXXER2023VIN008",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 9,
    name: "Honda Hornet 2.0",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard-obd-2b1740150415645.jpg?q=80",
    info: "Aggressive design and performance.",
    details: {
      price: "₹1,35,000", modelYear: "2023", mileage: "45 km/l", vin: "HONDARNET2023VIN009",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 10,
    name: "Bajaj Platina 110",
    image: "https://imgd.aeplcdn.com/664x374/bw/models/bajaj-platina-110.jpg?20190804111815&q=80",
    info: "High mileage commuter bike.",
    details: {
      price: "₹70,000", modelYear: "2023", mileage: "70 km/l", vin: "BAJPLATINA2023VIN010",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 11,
    name: "TVS Raider 125",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tvs-raider-125-drum1741766352464.jpg?q=80",
    info: "Stylish and fun to ride commuter.",
    details: {
      price: "₹95,000", modelYear: "2023", mileage: "57 km/l", vin: "TVSRAIDER2023VIN011",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 12,
    name: "Hero Xpulse 200T",
    image: "https://imgd.aeplcdn.com/664x374/bw/models/hero-xpulse-200t-standard-bs620210313131548.jpg?q=80",
    info: "Tourer bike for rough roads.",
    details: {
      price: "₹1,36,000", modelYear: "2023", mileage: "40 km/l", vin: "HEROXPULSE2023VIN012",
      fuel: "Petrol", transmission: "Manual", seats: 2,
    },
  }
];

function BrowseBikes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);
  const [showBuyForm, setShowBuyForm] = useState(false); // ✅ added

  const handleDetails = (bike) => {
    setSelectedBike(bike);
    setShowModal(true);
    setShowBuyForm(false); // reset form view
  };

  const handleBuy = () => {
    setShowBuyForm(true); // ✅ show form
  };

  const handleCancelForm = () => {
    setShowBuyForm(false); // ✅ back to bike details
  };

  const handleConfirmForm = () => {
    alert("Booking Confirmed!");
    setShowBuyForm(false);
    setShowModal(false);
  };

  return (
    <Container className="my-4">
      <h2 className="text-primary">Browse Bikes</h2>
      <Row className="g-4">
        {bikeModels.map((bike) => (
          <Col md={4} key={bike.id}>
            <Card>
              <Card.Img variant="top" src={bike.image} />
              <Card.Body>
                <Card.Title>{bike.name}</Card.Title>
                <Card.Text>{bike.info}</Card.Text>
                <Button variant="info" onClick={() => handleDetails(bike)}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedBike?.name} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* ✅ Conditionally show BuyForm */}
          {showBuyForm ? (
            <BuyForm
              vehicle={selectedBike}
              onConfirm={handleConfirmForm}
              onCancel={handleCancelForm}
            />
          ) : (
            <>
              <Row>
                <Col md={6}>
                  <img
                    src={selectedBike?.image}
                    alt={selectedBike?.name}
                    className="img-fluid"
                  />
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li><strong>Price:</strong> {selectedBike?.details.price}</li>
                    <li><strong>Model Year:</strong> {selectedBike?.details.modelYear}</li>
                    <li><strong>Mileage:</strong> {selectedBike?.details.mileage}</li>
                    <li><strong>VIN:</strong> {selectedBike?.details.vin}</li>
                    <li><strong>Fuel:</strong> {selectedBike?.details.fuel}</li>
                    <li><strong>Transmission:</strong> {selectedBike?.details.transmission}</li>
                    <li><strong>Seats:</strong> {selectedBike?.details.seats}</li>
                  </ul>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          {!showBuyForm && ( // ✅ Only show buttons if not inside form
            <>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="success" onClick={handleBuy}>
                Proceed to Buy
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default BrowseBikes;











