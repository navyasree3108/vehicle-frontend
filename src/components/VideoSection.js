import React from "react";
import { Container } from "react-bootstrap";

function VideoSection() {
  return (
    <section 
      className="py-5"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://source.unsplash.com/1600x400/?showroom,vehicles)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      <Container className="text-center">
        <h2 className="mb-4">Watch Our Vehicles in Action</h2>
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <video
            controls
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
            }}
          >
            <source src="https://cdn.pixabay.com/video/2015/11/27/1406-147169807_medium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
}

export default VideoSection;
