import React, { useState } from "react";
import BuyForm from "../BuyForm";

import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const lorryModels = [
  // ... your lorryModels array (unchanged)
  {
    id: 1,
    name: "Tata Ace Gold",
    image: "https://5.imimg.com/data5/NP/OU/GLADMIN-13930657/tata-ace-mini-truck-500x500.jpg",
    info: "Mini truck for city transport.",
    details: {
      price: "₹4,50,000", modelYear: "2023", mileage: "20 km/l", vin: "TATAACE2023VIN001",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 2,
    name: "Ashok Leyland Dost+",
    image: "https://5.imimg.com/data5/OV/FX/GLADMIN-13855348/tata-ace-500x500.jpg",
    info: "High performance mini truck.",
    details: {
      price: "₹6,00,000", modelYear: "2023", mileage: "18 km/l", vin: "ASHDOST2023VIN002",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 3,
    name: "Mahindra Bolero Pickup",
    image: "https://cdn.trucksfloor.com/vehicles/truck/trf/mahindra-bolero-pik-up-1.jpg",
     height: "200px",
    info: "Heavy duty pickup lorry.",
    details: {
      price: "₹7,00,000", modelYear: "2023", mileage: "17 km/l", vin: "MAHBOLERO2023VIN003",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 4,
    name: "Eicher Pro 2049",
    image: "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/554_eicher-pro-2049-mini-truck.jpg",
    info: "Medium duty commercial vehicle.",
    details: {
      price: "₹9,00,000", modelYear: "2023", mileage: "13 km/l", vin: "EICHER2023VIN004",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 5,
    name: "Force Shaktiman",
    image: "https://5.imimg.com/data5/AW/FY/RC/SELLER-108252344/shaktiman-200-500x500.jpg",
    info: "Tough terrain commercial lorry.",
    details: {
      price: "₹8,25,000", modelYear: "2023", mileage: "14 km/l", vin: "FORCESHAKTI2023VIN005",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 6,
    name: "Isuzu D-Max",
    image: "https://static.toiimg.com/thumb/msid-103243687,width-1280,height-720,resizemode-4/103243687.jpg",
    info: "Premium commercial pickup.",
    details: {
      price: "₹8,50,000", modelYear: "2023", mileage: "12 km/l", vin: "ISUZUDMAX2023VIN006",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 7,
    name: "Piaggio Ape Xtra LDX",
    image: "https://5.imimg.com/data5/NB/MR/MY-43358038/ape-porter.jpg",
    info: "Three-wheeled commercial lorry.",
    details: {
      price: "₹3,00,000", modelYear: "2023", mileage: "36 km/l", vin: "PIAGAPE2023VIN007",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 8,
    name: "Tata Intra V30",
    image: "https://smalltrucks.tatamotors.com/assets/smalltrucks/files/2025-03/c6945395-292e-442d-911f-652c307896dd_removalai_preview%281%29.png?VersionId=2hGpMpFd.rG_x5H9FrrreZyld1gHbpQW",
    info: "Stylish compact commercial truck.",
    details: {
      price: "₹7,50,000", modelYear: "2023", mileage: "16 km/l", vin: "TATAINTRA2023VIN008",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
  {
    id: 9,
    name: "Mahindra Supro Maxitruck",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq_8f_eYWTEWQCUTrRi00WLup0gAO5QLrzQ&s",
    info: "Compact truck with heavy load capacity.",
    details: {
      price: "₹6,80,000", modelYear: "2023", mileage: "21 km/l", vin: "MAHSUPRO2023VIN009",
      fuel: "Diesel", transmission: "Manual", seats: 2,
    },
  },
];

function BrowseLorries() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLorry, setSelectedLorry] = useState(null);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleDetails = (lorry) => {
    setSelectedLorry(lorry);
    setShowModal(true);
    setShowBuyForm(false);
    setBookingSuccess(false);
  };

  const handleBuy = () => {
    setShowBuyForm(true);
  };

  const handleBookingConfirm = () => {
    setBookingSuccess(true);
    setShowBuyForm(false);
  };

  return (
    <Container className="my-4">
      <h2 className="text-primary">Browse Lorries</h2>
      <Row className="g-4">
        {lorryModels.map((lorry) => (
          <Col md={4} key={lorry.id}>
            <Card>
              <Card.Img
                variant="top"
                src={lorry.image}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{lorry.name}</Card.Title>
                <Card.Text>{lorry.info}</Card.Text>
                <Button variant="info" onClick={() => handleDetails(lorry)}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedLorry?.name} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bookingSuccess && (
            <p className="text-success fw-bold">✅ Booking successfully done!</p>
          )}

          {showBuyForm ? (
            <BuyForm vehicle={selectedLorry} onConfirm={handleBookingConfirm} />
          ) : (
            <Row>
              <Col md={6}>
                <img
                  src={selectedLorry?.image}
                  alt={selectedLorry?.name}
                  className="img-fluid"
                />
              </Col>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li><strong>Price:</strong> {selectedLorry?.details.price}</li>
                  <li><strong>Model Year:</strong> {selectedLorry?.details.modelYear}</li>
                  <li><strong>Mileage:</strong> {selectedLorry?.details.mileage}</li>
                  <li><strong>VIN:</strong> {selectedLorry?.details.vin}</li>
                  <li><strong>Fuel:</strong> {selectedLorry?.details.fuel}</li>
                  <li><strong>Transmission:</strong> {selectedLorry?.details.transmission}</li>
                  <li><strong>Seats:</strong> {selectedLorry?.details.seats}</li>
                </ul>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {!showBuyForm && !bookingSuccess && (
            <Button variant="success" onClick={handleBuy}>
              Proceed to Buy
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default BrowseLorries;
