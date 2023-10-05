import React from "react";
import Model from "./Model";
import "../css/landingPage.css";
import { useState } from "react";

import AOS from "aos";

function LandingPage() {
  return (
    <div className="background-container">
      <div className="landing-container">
        <div data-aos="fade-down" className="containerrr">
          <p className="landing-text">Digital Fabrication</p>
          <p className="landing-text">Custom furniture</p>
          <p className="landing-text">Mass production</p>
          <p className="landing-text">CNC cutting</p>
        </div>

        <div className="red">
          {/* <Canvas
            camera={{ position: [-70, 40, 60], fov: 60, near: 0.1, far: 500 }}
            onCreated={({ gl }) => {
              gl.setClearColor("#f0f0f0", 0); // Set a transparent background
            }}
            gl={{ alpha: true }} // Enable transparency
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model />
          </Canvas> */}
          {/* <Test /> */}

          {/* <Canvas>
            <Model />
          </Canvas> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
