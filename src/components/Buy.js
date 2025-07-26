import React, { useState } from "react";

const dummyVehicles = [
  { id: 1, name: "Honda Civic", type: "Car", price: "$10,000" },
  { id: 2, name: "Yamaha R15", type: "Bike", price: "$1,500" },
  { id: 3, name: "Tata Truck", type: "Truck", price: "$20,000" },
];

function Buy() {
  const [message, setMessage] = useState("");

  const handleBuy = (vehicle) => {
    setMessage(`You have selected to buy: ${vehicle.name}`);
  };

  return (
    <div className="container mt-5">
      <h2>Available Vehicles for Purchase</h2>
      <p>Select a vehicle and click Buy Now to proceed.</p>
      <div className="row">
        {dummyVehicles.map((v) => (
          <div key={v.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{v.name}</h5>
                <p className="card-text">{v.type}</p>
                <p className="card-text fw-bold">{v.price}</p>
                <button
                  onClick={() => handleBuy(v)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {message && (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )}
    </div>
  );
}

export default Buy;
