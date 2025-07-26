import React, { useState } from 'react';
import BuyForm from './BuyForm'; // 👈 import your form

function VehicleDetailsModal({ vehicle, onClose }) {
  const [showBuyForm, setShowBuyForm] = useState(false);

  const handleProceedToBuy = () => {
    setShowBuyForm(true);
  };

  const handleConfirmBooking = () => {
    alert('Booking Confirmed!');
    setShowBuyForm(false);
    onClose(); // close modal after confirming
  };

  const handleCancelBooking = () => {
    setShowBuyForm(false); // go back to vehicle details
  };

  if (!vehicle) return null;

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content p-4">
          <button type="button" className="btn-close ms-auto" onClick={onClose}></button>

          {showBuyForm ? (
            // ✅ Render BuyForm instead of vehicle details
            <BuyForm
              vehicle={vehicle}
              onConfirm={handleConfirmBooking}
              onCancel={handleCancelBooking}
            />
          ) : (
            <>
              <h3>{vehicle.brand} {vehicle.model} Details</h3>
              <img src={vehicle.image} alt={vehicle.model} style={{ width: '300px' }} className="my-3" />

              <ul className="list-group mb-3">
                <li className="list-group-item"><strong>Price:</strong> ₹{vehicle.price}</li>
                <li className="list-group-item"><strong>Model Year:</strong> {vehicle.year}</li>
                <li className="list-group-item"><strong>Mileage:</strong> {vehicle.mileage}</li>
                <li className="list-group-item"><strong>VIN:</strong> {vehicle.vin}</li>
                <li className="list-group-item"><strong>Fuel:</strong> {vehicle.fuel}</li>
                <li className="list-group-item"><strong>Transmission:</strong> {vehicle.transmission}</li>
                <li className="list-group-item"><strong>Seats:</strong> {vehicle.seats}</li>
              </ul>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={onClose}>Close</button>
                <button className="btn btn-success" onClick={handleProceedToBuy}>Proceed to Buy</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleDetailsModal;
