// import React, { useEffect } from "react";
// import { useState } from "react";
// import "../css/imageSlider.css";

// function ImageSlider() {
//   const images = [
//     {
//       image: " /Gallery/pic1.jpg",
//     },
//     {
//       image: " /Gallery/pic2.jpg",
//     },
//     {
//       image: " /Gallery/pic3.jpg",
//     },
//     {
//       image: " /Gallery/pic4.jpg",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   let timeOut = null;

//   useEffect(() => {
//     timeOut =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 4000);
//   });

//   const slideRight = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//     clearTimeout(timeOut);
//   };

//   const slideLeft = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//     clearTimeout(timeOut);
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
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

// import React, { useEffect } from "react";
// import { useState } from "react";
// import "../css/imageSlider.css";
// import { Parallax } from "react-parallax";

// function ImageSlider() {
//   const images = [
//     {
//       image: "/Gallery/pic1.jpg",
//       title: "Title 1",
//     },
//     {
//       image: "/Gallery/pic2.jpg",
//       title: "Title 2",
//     },
//     {
//       image: "/Gallery/pic3.jpg",
//       title: "Title 3",
//     },
//     {
//       image: "/Gallery/pic4.jpg",
//       title: "Title 4",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   let timeOut = null;

//   useEffect(() => {
//     timeOut =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 4000);

//     // Cleanup the timeout on component unmount
//     return () => clearTimeout(timeOut);
//   }, [current, autoPlay]);

//   const slideRight = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   const slideLeft = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
//             <Parallax
//               key={index}
//               className="carousel-card"
//               strength={200}
//               blur={{ min: -15, max: 15 }}
//             >
//               <img
//                 className="card-image"
//                 src={image.image}
//                 alt=""
//                 style={{ zIndex: index === current ? 1 : 0 }}
//               />
//               <div className="card-overlay">
//                 <h2 className="card-title">{image.title}</h2>
//               </div>
//             </Parallax>
//           );
//         })}
//       </div>
//       <div className="carousel-pagination">
//         {images.map((_, index) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "pagination-dot pagination-dot-active"
//                   : "pagination-dot"
//               }
//               onClick={() => {
//                 setCurrent(index);
//                 clearTimeout(timeOut);
//               }}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

// import React, { useEffect, useState } from "react";
// import "../css/imageSlider.css";

// function ImageSlider() {
//   const images = [
//     {
//       image: "/Gallery/pic1.jpg",
//       title: "Title 1",
//     },
//     {
//       image: "/Gallery/pic2.jpg",
//       title: "Title 2",
//     },
//     {
//       image: "/Gallery/pic3.jpg",
//       title: "Title 3",
//     },
//     {
//       image: "/Gallery/pic4.jpg",
//       title: "Title 4",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   let timeOut = null;

//   useEffect(() => {
//     timeOut =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 4000);

//     // Cleanup the timeout on component unmount
//     return () => clearTimeout(timeOut);
//   }, [current, autoPlay]);

//   const slideRight = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   const slideLeft = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "carousel-card carousel-card-active"
//                   : "carousel-card"
//               }
//               style={{
//                 backgroundImage: `url(${image.image})`,
//               }}
//             >
//               <div className="card-overlay">
//                 <h2 className="card-title">{image.title}</h2>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="carousel-pagination">
//         {images.map((_, index) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "pagination-dot pagination-dot-active"
//                   : "pagination-dot"
//               }
//               onClick={() => {
//                 setCurrent(index);
//                 clearTimeout(timeOut);
//               }}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

// import React, { useEffect, useState } from "react";
// import "../css/imageSlider.css";
// import { Parallax } from "react-parallax";

// function ImageSlider() {
//   const images = [
//     {
//       image: "/Gallery/pic1.jpg",
//       title: "Title 1",
//     },
//     {
//       image: "/Gallery/pic2.jpg",
//       title: "Title 2",
//     },
//     {
//       image: "/Gallery/pic3.jpg",
//       title: "Title 3",
//     },
//     {
//       image: "/Gallery/pic4.jpg",
//       title: "Title 4",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   let timeOut = null;

//   useEffect(() => {
//     timeOut =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 4000);

//     // Cleanup the timeout on component unmount
//     return () => clearTimeout(timeOut);
//   }, [current, autoPlay]);

//   const slideRight = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   const slideLeft = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
//             <Parallax
//               key={index}
//               className="carousel-card"
//               bgImage={image.image}
//               strength={200}
//             >
//               <div className="card-overlay">
//                 <h2 className="card-title">{image.title}</h2>
//               </div>
//             </Parallax>
//           );
//         })}
//       </div>
//       <div className="carousel-pagination">
//         {images.map((_, index) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "pagination-dot pagination-dot-active"
//                   : "pagination-dot"
//               }
//               onClick={() => {
//                 setCurrent(index);
//                 clearTimeout(timeOut);
//               }}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

// import React, { useEffect, useState, useRef } from "react";
// import "../css/imageSlider.css";
// import { Parallax } from "react-parallax";

// function ImageSlider() {
//   const images = [
//     {
//       image: "/Gallery/pic1.jpg",
//       title: "Title 1",
//     },
//     {
//       image: "/Gallery/pic2.jpg",
//       title: "Title 2",
//     },
//     {
//       image: "/Gallery/pic3.jpg",
//       title: "Title 3",
//     },
//     {
//       image: "/Gallery/pic4.jpg",
//       title: "Title 4",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   // Declare timeOut as a local variable using useRef
//   const timeOutRef = useRef(null);

//   useEffect(() => {
//     if (autoPlay) {
//       // Use clearTimeout with the ref
//       timeOutRef.current = setTimeout(() => {
//         slideRight();
//       }, 4000);
//     }

//     // Cleanup the timeout on component unmount
//     return () => clearTimeout(timeOutRef.current);
//   }, [current, autoPlay]);

//   const slideRight = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   const slideLeft = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
//             <Parallax
//               key={index}
//               className={`carousel-card ${
//                 index === current ? "carousel-card-active" : ""
//               }`}
//               bgImage={image.image}
//               strength={200}
//             >
//               <div className="card-overlay">
//                 <h2 className="card-title">{image.title}</h2>
//               </div>
//             </Parallax>
//           );
//         })}
//       </div>
//       <div className="carousel-pagination">
//         {images.map((_, index) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "pagination-dot pagination-dot-active"
//                   : "pagination-dot"
//               }
//               onClick={() => {
//                 clearTimeout(timeOutRef.current);
//                 setCurrent(index);
//               }}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

// import React, { useEffect, useState, useRef } from "react";
// import "../css/imageSlider.css";
// import { Parallax } from "react-parallax";

// function ImageSlider() {
//   const images = [
//     {
//       image: "/Gallery/pic1.jpg",
//       title: "Title 1",
//     },
//     {
//       image: "/Gallery/pic2.jpg",
//       title: "Title 2",
//     },
//     {
//       image: "/Gallery/pic3.jpg",
//       title: "Title 3",
//     },
//     {
//       image: "/Gallery/pic4.jpg",
//       title: "Title 4",
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       slideRight();
//     }, 4000);

//     return () => clearTimeout(timeoutId);
//   }, [current]);

//   const slideRight = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => {
//           return (
//             <Parallax
//               key={index}
//               className={`carousel-card ${index === current ? "active" : ""}`}
//               bgImage={index === current ? image.image : ""}
//               strength={200}
//             >
//               <div className="card-overlay">
//                 <h2 className="card-title">{image.title}</h2>
//               </div>
//             </Parallax>
//           );
//         })}
//       </div>
//       <div className="carousel-pagination">
//         {images.map((_, index) => {
//           return (
//             <div
//               key={index}
//               className={`pagination-dot ${index === current ? "active" : ""}`}
//               onClick={() => {
//                 setCurrent(index);
//               }}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

// import React, { useEffect, useState } from "react";
// import "../css/imageSlider.css";
// import { Parallax } from "react-parallax";

// function ImageSlider() {
//   const images = [
//     {
//       image: "/Gallery/pic1.jpg",
//       title: "Title 1",
//     },
//     {
//       image: "/Gallery/pic2.jpg",
//       title: "Title 2",
//     },
//     {
//       image: "/Gallery/pic3.jpg",
//       title: "Title 3",
//     },
//     {
//       image: "/Gallery/pic4.jpg",
//       title: "Title 4",
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       slideRight();
//     }, 4000);

//     return () => clearTimeout(timeoutId);
//   }, [current]);

//   const slideRight = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   return (
//     <div className="carousel">
//       {/* <div className="carousel-wrapper"> */}
//       {images.map((image, index) => (
//         <Parallax
//           key={index}
//           blur={0}
//           bgImage={image.image}
//           strength={200}
//           style={{
//             display: index === current ? "block" : "none",
//             height: "100vh",
//           }}
//         >
//           <div
//             className={`carousel-card ${index === current ? "active" : "none"}`}
//           >
//             <div className="card-overlay">
//               <h2 className="card-title">{image.title}</h2>
//             </div>
//           </div>
//         </Parallax>
//       ))}
//       {/* </div> */}
//       <div className="carousel-pagination">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`pagination-dot ${index === current ? "active" : ""}`}
//             onClick={() => setCurrent(index)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

import React, { useEffect, useState } from "react";
import "../css/imageSlider.css";

function ImageSlider() {
  const images = [
    {
      image: "/Gallery/pic1.jpg",
    },
    {
      image: "/Gallery/pic2.jpg",
    },
    {
      image: "/Gallery/pic3.jpg",
    },
    {
      image: "/Gallery/pic4.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      slideRight();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [current]);

  const slideRight = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
    );
  };

  return (
    <>
      <div className="slider-text">
        <p>Digital fabrication</p>
        <p>3D Modeling</p>
        <p>PlyWood work</p>
        <div className="btn-icon-container">
          <button a href="/Services" className="explore-button">
            EXPLORE
          </button>
          {/* <img className="slider-icon" src="/icons/arrow.png"></img> */}
        </div>
      </div>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-card ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.image})`,
              transform: `translateY(${
                (index - current) * 20 + scrollY / 3
              }px)`,
            }}
          >
            <div className="card-overlay">
              <h2 className="card-title">{image.title}</h2>
            </div>
          </div>
        ))}
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
