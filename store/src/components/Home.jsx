import React from "react";
import Navbar from "./Navbar";
import Store from "../pages/Store";
import Footer from "./Footer";
import Model from "./Model";
import LandingPage from "./LandingPage";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
// import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="landing-container">
        <div className="containerrr">
          <p className="landing-text">Digital Fabrication</p>
          <p className="landing-text">Custom furniture</p>
          <p className="landing-text">Mass production</p>
          <p className="landing-text">CNC cutting</p>
        </div>

        <div className="red">
          <Canvas
            camera={{ position: [-70, 40, 60], fov: 45, near: 0.1, far: 200 }}
            onCreated={({ gl }) => {
              gl.setClearColor("#f0f0f0", 0); // Set a transparent background
            }}
            gl={{ alpha: true }} // Enable transparency
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model />
          </Canvas>
        </div>
      </div> */}
      {/* <LandingPage /> */}

      <ImageSlider />
      <Store />
      <Services />
      {/* <SectiuneNoua /> */}
      <Footer />
    </>
  );
}

export default Home;
