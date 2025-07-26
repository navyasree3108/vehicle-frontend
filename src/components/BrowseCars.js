import React, { useState } from "react";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";
import BuyForm from "../BuyForm"; // Import the form component

  
const carModels = [ 
   {
    id: 1,
    name: "Hyundai Creta",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    info: "Compact SUV with stylish design.",
    details: {
      price: "₹12,00,000",
      modelYear: "2023",
      mileage: "16 km/l",
      vin: "HYCRETA2023VIN001",
      fuel: "Petrol/Diesel",
      transmission: "Automatic",
      seats: 5,
    },
  },
  {
    id: 2,
    name: "Tata Nexon",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    info: "Compact SUV with 5-star safety.",
    details: {
      price: "₹9,50,000",
      modelYear: "2023",
      mileage: "17 km/l",
      vin: "NEXON2023VIN002",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
    },
  },
  {
    id: 3,
    name: "Toyota Fortuner",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
    info: "Premium SUV for all terrains.",
    details: {
      price: "₹40,00,000",
      modelYear: "2023",
      mileage: "10 km/l",
      vin: "FORTUNER2023VIN003",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 7,
    },
  },
  {
    id: 4,
    name: "Mahindra Thar",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80",
    info: "Off-road adventure SUV.",
    details: {
      price: "₹15,00,000",
      modelYear: "2023",
      mileage: "13 km/l",
      vin: "THAR2023VIN004",
      fuel: "Diesel",
      transmission: "Manual",
      seats: 4,
    },
  },
  {
    id: 5,
    name: "Maruti Suzuki Swift",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/159231/swift-right-front-three-quarter.jpeg?isig=0&q=80",
    info: "Hatchback with sporty design.",
    details: {
      price: "₹7,00,000",
      modelYear: "2023",
      mileage: "22 km/l",
      vin: "SWIFT2023VIN005",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
    },
  },
  {
    id: 6,
    name: "Honda City",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/26755/city-4th-generation-exterior-right-front-three-quarter.jpeg?q=80",
    info: "Executive sedan with elegance.",
    details: {
      price: "₹11,00,000",
      modelYear: "2023",
      mileage: "18 km/l",
      vin: "CITY2023VIN006",
      fuel: "Petrol",
      transmission: "CVT",
      seats: 5,
    },
  },
  {
    id: 7,
    name: "Kia Seltos",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-right-front-three-quarter-3.jpeg?q=80",
    info: "SUV with tech & style.",
    details: {
      price: "₹11,50,000",
      modelYear: "2023",
      mileage: "16 km/l",
      vin: "SELTOS2023VIN007",
      fuel: "Petrol/Diesel",
      transmission: "Automatic",
      seats: 5,
    },
  },
  {
    id: 8,
    name: "Ford Endeavour",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=80&q=80",
    info: "Rugged full-size SUV.",
    details: {
      price: "₹35,00,000",
      modelYear: "2022",
      mileage: "12 km/l",
      vin: "ENDEAVOUR2022VIN008",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 7,
    },
  },
  {
    id: 9,
    name: "Renault Kwid",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    info: "Affordable city car.",
    details: {
      price: "₹4,50,000",
      modelYear: "2023",
      mileage: "22 km/l",
      vin: "KWID2023VIN009",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
    },
  },
  {
    id: 10,
    name: "Volkswagen Polo",
    image: "https://imgd.aeplcdn.com/664x374/cw/ec/12907/Volkswagen-Polo-Right-Front-Three-Quarter-55830.jpg?v=201711021421&q=80",
    info: "Hatchback with European flair.",
    details: {
      price: "₹6,50,000",
      modelYear: "2022",
      mileage: "18 km/l",
      vin: "POLO2022VIN010",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
    },
  },
  {
    id: 11,
    name: "Skoda Superb",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/39039/superb-exterior-right-front-three-quarter-2.jpeg?q=80",
    info: "Luxury sedan with elegance.",
    details: {
      price: "₹32,00,000",
      modelYear: "2022",
      mileage: "14 km/l",
      vin: "SUPERB2022VIN011",
      fuel: "Petrol",
      transmission: "DSG",
      seats: 5,
    },
  },
  {
    id: 12,
    name: "MG Hector",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-86.jpeg?isig=0&q=80",
    info: "Smart connected SUV.",
    details: {
      price: "₹16,00,000",
      modelYear: "2023",
      mileage: "14 km/l",
      vin: "HECTOR2023VIN012",
      fuel: "Petrol/Diesel",
      transmission: "Automatic",
      seats: 5,
    },
  },
];

const BrowseCars = () => {
  const [selectedCar, setSelectedCar] = useState(null); // To store selected car
  const [showModal, setShowModal] = useState(false);     // To toggle modal
  const [showBuyForm, setShowBuyForm] = useState(false); // To toggle form inside modal

  const handleDetails = (car) => {
    setSelectedCar(car);
    setShowModal(true);
    setShowBuyForm(false);
  };

  const handleBuy = () => {
  const vehicleInfo = {
    name: selectedCar.name,
    price: selectedCar.details.price,
    modelYear: selectedCar.details.modelYear,
  };
  setSelectedCar({ ...selectedCar, vehicleInfo });
  setShowBuyForm(true);
};


  const handleCancelForm = () => {
    setShowBuyForm(false);
  };

  const handleConfirmForm = () => {
    alert("Booking Confirmed!");
    setShowBuyForm(false);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Browse Cars</h2>
      <Row xs={1} md={3} className="g-4">
        {carModels.map((car, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={car.image} />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>Price: {car.details.price}</Card.Text>
                <Button variant="primary" onClick={() => handleDetails(car)}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for showing details and Buy form */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCar?.name} Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {showBuyForm ? (
            <BuyForm
              vehicle={selectedCar}
              onConfirm={handleConfirmForm}
              onCancel={handleCancelForm}
            />
          ) : (
            <Row>
              <Col md={6}>
                <img
                  src={selectedCar?.image}
                  alt={selectedCar?.name}
                  className="img-fluid"
                />
              </Col>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li><strong>Price:</strong> {selectedCar?.details.price}</li>
                  <li><strong>Model Year:</strong> {selectedCar?.details.modelYear}</li>
                  <li><strong>Mileage:</strong> {selectedCar?.details.mileage}</li>
                  <li><strong>VIN:</strong> {selectedCar?.details.vin}</li>
                  <li><strong>Fuel:</strong> {selectedCar?.details.fuel}</li>
                  <li><strong>Transmission:</strong> {selectedCar?.details.transmission}</li>
                  <li><strong>Seats:</strong> {selectedCar?.details.seats}</li>
                </ul>
              </Col>
            </Row>
          )}
        </Modal.Body>

        <Modal.Footer>
          {!showBuyForm && (
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
    </div>
  );
};

export default BrowseCars;
