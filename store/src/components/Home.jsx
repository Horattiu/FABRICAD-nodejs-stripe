import React from "react";
import Navbar from "./Navbar";
import Store from "../pages/Store";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
import Catalogue from "./Catalogue";
import Contact from "./Contact";
// import LoginButton from "./LoginButton";

function Home() {
  return (
    <>
      <Navbar />
      {/* <LoginButton /> */}
      <ImageSlider />
      <Catalogue />
      {/* <Store /> */}
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
