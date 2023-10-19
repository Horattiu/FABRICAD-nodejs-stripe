import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

import "../css/catalogue.css";

function Category() {
  useEffect(() => {
    AOS.init({
      duration: 550,
    });
  }, []);

  const catalogueRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToCatalogue = () => {
    if (window.location.hash === "#catalogue") {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <h1 id="catalogue" ref={catalogueRef} className="catalogue-title">
        Catalogue
      </h1>
      <div className="page-container">
        <div className="categories-container">
          <Link to="/category/chairs" onClick={scrollToTop}>
            <div data-aos="fade-up" className="category">
              <img src="Category/scaun.jpg" alt="" />
              <div className="overlay">
                <p className="name">chairs</p>
              </div>
            </div>
          </Link>
          <Link to="/category/desks" onClick={scrollToTop}>
            <div data-aos="fade-up" className="category">
              <img src="Category/masa.jpg" alt="" />
              <div className="overlay">
                <p className="name">tables</p>
              </div>
            </div>
          </Link>
          <Link to="/category/toys" onClick={scrollToTop}>
            <div data-aos="fade-up" className="category">
              <img src="Category/jucarie.JPG" alt="" />
              <div className="overlay">
                <p className="name">toys</p>
              </div>
            </div>
          </Link>
          <Link to="category/beds" onClick={scrollToTop}>
            <div data-aos="fade-up" className="category">
              <img src="Category/pat.JPG" alt="" />
              <div className="overlay">
                <p className="name">beds</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Category;
