import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BrowseCars from "./components/BrowseCars";
import BrowseBikes from "./components/BrowseBikes";
import BrowseLorries from "./components/BrowseLorries";
import BuyForm from "./BuyForm"; // Correct import from src folder
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import Sell from "./components/Sell";
import BookVehicle from "./components/BookVehicle";
import Login from "./components/Login";
import VehicleSelector from "./components/VehicleSelector";
import Signup from "./components/Signup";
import Notifications from "./components/Notifications";
import ForgotPassword from "./components/ForgotPassword";

import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import BestDealers from "./components/BestDealers";
import Brands from "./components/Brands";

import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);

  const handleProceedToBuy = (vehicle) => {
    setSelectedVehicle(vehicle);
    setVehicleData(vehicle);
    setShowBuyForm(true);
  };

  const handleBookingConfirm = () => {
    alert("Booking confirmed!");
    setShowBuyForm(false);
    setVehicleData(null);
  };

  return (
    <div className="app-container">
      <MyNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/buy" element={<VehicleSelector />} />
          <Route path="/browse-cars" element={<BrowseCars onBuy={handleProceedToBuy} />} />
          <Route path="/browse-bikes" element={<BrowseBikes onBuy={handleProceedToBuy} />} />
          <Route path="/browse-lorries" element={<BrowseLorries onBuy={handleProceedToBuy} />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/vehicles" element={<Gallery />} />
        
          
          <Route path="/dealers" element={<BestDealers />} />
          <Route path="/brands" element={<Brands />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
         
        
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book"
            element={
              <ProtectedRoute>
                <BookVehicle />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {showBuyForm && vehicleData && (
          <BuyForm
            vehicle={vehicleData}
            onConfirm={handleBookingConfirm}
            onCancel={() => setShowBuyForm(false)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
