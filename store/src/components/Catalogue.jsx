import React from "react";
import { Link } from "react-router-dom";
import "../css/catalogue.css";

function Category() {
  return (
    <>
      <div className="page-container">
        <div className="categories-container">
          <Link to="/category/chairs">
            <div className="category">
              <img src="Category/category.JPG" alt="" />
              <div className="overlay">
                <p className="name">chairs</p>
              </div>
            </div>
          </Link>
          <Link to="/category/desks">
            <div className="category">
              <img src="Category/category2.JPG" alt="" />
              <div className="overlay">
                <p className="name">desks</p>
              </div>
            </div>
          </Link>
          <Link to="Category/category3/toys">
            <div className="category">
              <img src="Category/category3.JPG" alt="" />
              <div className="overlay">
                <p className="name">Toys</p>
              </div>
            </div>
          </Link>
          <Link to="Category/category3/toys">
            <div className="category">
              <img src="Category/category3.JPG" alt="" />
              <div className="overlay">
                <p className="name">Toys</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Category;
