import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
import Catalogue from "./Catalogue";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Catalogue />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
