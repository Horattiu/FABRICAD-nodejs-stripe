import React from "react";
// import "../css/imageGallery.css";
import img1 from "../components/Gallery/img1.jpg";
import img2 from "../components/Gallery/img2.jpg";
import img3 from "../components/Gallery/img3.jpg";
import img4 from "../components/Gallery/img4.jpg";
import img5 from "../components/Gallery/img5.jpg";
import img6 from "../components/Gallery/img6.jpg";
import Navbar from "./Navbar";

const images = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
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
