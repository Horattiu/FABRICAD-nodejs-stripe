import React from "react";
import Navbar from "./Navbar";
import Store from "../pages/Store";
import Footer from "./Footer";
import Model from "./Model";
import ImageSlider from "./ImageSlider";
import Services from "./Services";

function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Store />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
