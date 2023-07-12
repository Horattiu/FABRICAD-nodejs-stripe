

// import React, { useState } from "react";
// import img1 from "./img1.jpg";
// import img2 from "./img2.jpg";
// import img3 from "./img3.jpg";
// import img4 from "./img4.jpg";
// import img5 from "./img5.jpg";
// import img6 from "./img6.jpg";
// import img7 from "./img7.jpg";
// import img8 from "./img8.jpg";

// import "./gallery.css";

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseFullScreen = () => {
//     setSelectedImage(null);
//   };

//   const images = [img1, img2, img3, img4, img5, img6, img7, img8];

//   return (
//     <div className="gallery">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Image ${index + 1}`}
//           onClick={() => handleImageClick(image)}
//         />
//       ))}

//       {selectedImage && (
//         <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
//           <img
//             src={selectedImage}
//             alt="Full Screen"
//             className="full-screen-image"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;





import React, { useState } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";

import "./gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => handleImageClick(image)}
          className={selectedImage === image ? "selected-image" : ""}
        />
      ))}

      {selectedImage && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <img
            src={selectedImage}
            alt="Full Screen"
            className={`full-screen-image ${
              selectedImage ? "selected-image" : ""
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
