import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#4b0082",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontWeight: "900",
          fontSize: "1.6rem",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        🚗 VEHICLE MARKETPLACE
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            backgroundColor: "white",
            color: "#4b0082",
            border: "none",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "0.95rem",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/buy")}
        >
          Buy Car
        </button>

        <button
          style={{
            backgroundColor: "white",
            color: "#4b0082",
            border: "none",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "0.95rem",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/sell")}
        >
          Sell Car
        </button>
      </div>
    </header>
  );
}

export default Header;
