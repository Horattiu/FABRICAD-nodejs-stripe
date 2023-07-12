// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./imageSlider.css";
// import { images } from "./SliderData";
// // import { images } from "./SliderData";

// // import myImage from "./img/pic2.jpg";

// function ImageSlider({ images }) {
//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   let timeOut = null;

//   useEffect(() => {
//     timeOut =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 2500);
//   });

//   const slideRight = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//     clearTimeout(timeOut);
//   };

//   const slideLeft = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//     clearTimeout(timeOut);
//   };
//   console.log(images);

//   return (
//     <div className="carousel">
//       {/* <div>
//         <img src={myImage} alt="My Image"></img>
//       </div> */}
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
//             /* (condition) ? true : false */

//             <div
//               key={index}
//               className={
//                 index == current
//                   ? "carousel-card carousel-card-active"
//                   : "carousel-card"
//               }
//             >
//               <img className="card-image" src={image.image} alt="" />
//               <div className="card-overlay">
//                 <h2 className="card-title">{image.title}</h2>
//               </div>
//             </div>
//           );
//         })}
//         <div className="carousel-arrow-left" onClick={slideLeft}>
//           &lsaquo;
//         </div>
//         <div className="carousel-arrow-right" onClick={slideRight}>
//           &rsaquo;
//         </div>
//         <div className="carousel-pagination">
//           {images.map((_, index) => {
//             return (
//               <div
//                 key={index}
//                 className={
//                   index == current
//                     ? "pagination-dot pagination-dot-active"
//                     : "pagination-dot"
//                 }
//                 onClick={() => {
//                   setCurrent(index);
//                   clearTimeout(timeOut);
//                 }}
//               ></div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

import React, { useEffect, useState } from "react";
import "./imageSlider.css";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
    clearTimeout(timeOut);
  };

  const slideLeft = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
    clearTimeout(timeOut);
  };

  const images = [
    {
      image: pic1,
      title: "Digital \n fabrication",
    },
    {
      image: pic2,
      title: "Furniture",
    },
    {
      image: pic3,
      title: "CNC cutting",
    },
    {
      image: pic4,
      title: "3D design",
    },
  ];

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-card ${
              index === current ? "carousel-card-active" : ""
            }`}
          >
            <img className="card-image" src={image.image} alt="" />
            <div className="card-overlay">
              <h2 className="card-title">{image.title}</h2>
            </div>
          </div>
        ))}
        <div className="carousel-arrow-left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel-arrow-right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${
                index === current ? "pagination-dot-active" : ""
              }`}
              onClick={() => {
                setCurrent(index);
                clearTimeout(timeOut);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
