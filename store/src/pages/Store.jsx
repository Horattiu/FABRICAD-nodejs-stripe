// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import { productsArray } from "../../src/productsStore";
// import ProductCard from "../components/ProductCard";
// import "../css/store.css";
// import { useEffect } from "react";
// import AOS from "aos";

// function Store() {
//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//     });
//   }, []);
//   return (
//     <>
//       <div data-aos="fade-up" className="store-container">
//         <h1 align="center" className="p-3">
//           Products
//         </h1>
//         <Row xs={1} md={3} className="g-4">
//           {productsArray.map((product, idx) => (
//             <Col align="center" key={idx}>
//               <ProductCard product={product} />
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </>
//   );
// }
// export default Store;

// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import { productsArray } from "../../src/productsStore";
// import ProductCard from "../components/ProductCard";
// import "../css/store.css";
// import { useEffect } from "react";
// import AOS from "aos";

// function Store() {
//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//     });
//   }, []);
//   return (
//     <>
//       <div data-aos="fade-up" className="store-container">
//         <h1>Products</h1>
//         <Row className="">
//           {productsArray.map((product, idx) => (
//             <Col key={idx}>
//               <ProductCard product={product} />
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </>
//   );
// }
// export default Store;

import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../css/store.css";
import AOS from "aos";

import { productsArray } from "../ProductsStore";

// Store.jsx
function Store() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <h1 id="title" className="products-title">
        Products
      </h1>
      <div data-aos="fade-up" className="store-container">
        {productsArray.map((product, idx) => (
          <div className="cardd" key={idx}>
            <ProductCard
              product={product}
              model={product.model}
              key={product.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
