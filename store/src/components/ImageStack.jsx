
import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function ImageStack({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // If it's the last image, cycle back to the first image
      setCurrentImageIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      // If it's the first image, go to the last image
      setCurrentImageIndex(images.length - 1);
    }
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="image-stack-container">
      <img src={currentImage} alt="Product" className="product-image" />
      {/* <button className="prev-button" onClick={handlePreviousImage}> */}
      <BsFillArrowLeftCircleFill
        className="prev-button"
        onClick={handlePreviousImage}
      />
      {/* </button> */}
      <BsFillArrowRightCircleFill
        className="next-button"
        onClick={handleNextImage}
      />
    </div>
  );
}

export default ImageStack;
