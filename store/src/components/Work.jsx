import React from "react";
// import "../css/imageGallery.css";
import img1 from "/Gallery/pic1.jpg";
import img2 from "/Gallery/pic2.jpg";
import img3 from "/Gallery/pic3.jpg";
import img4 from "/Gallery/pic4.jpg";

import Navbar from "./Navbar";

const images = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
];

function Work() {
  return (
    <>
      <Navbar />
      <div className="image-gallery">
        <h2 className="gallery-title">Works</h2>
        <div className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
