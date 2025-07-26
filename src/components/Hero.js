import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    const images = document.querySelectorAll(".slider img");
    let current = 0;

    const interval = setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img
        src="https://media.istockphoto.com/id/1701951821/photo/cars-in-a-row-used-car-sales.jpg?s=612x612&w=0&k=20&c=OX0sxpY6E9Z_1TPLpu0BaH8F05oWU-FRxsOmV32yuSg="
        className="active"
        alt="Car"
      />
      <img
        src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tvs-raider-125-drum1741766352464.jpg?q=80"
        alt="Bike"
      />
      <img
        src="https://image.made-in-china.com/2f0j00qOtoGhRETQcU/Shacman-6-Wheels-Van-Light-Lorry-Diesel-Cargo-Truck-Enclosed-Box-Truck-10-Ton-Capacity.webp"
        alt="Lorry"
      />

      <div className="overlay-box">
        <h2>Welcome to Vehicle Marketplace</h2>
        <p>
          Buy and sell your Cars, Bikes, and Trucks easily and securely.  
          Get started today!
        </p>
        <div className="button-group">
    
          <button className="btn login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="btn register-btn"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
