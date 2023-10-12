import React from "react";
import Navbar from "./Navbar";
import Store from "../pages/Store";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
import LoginButton from "./LoginButton";

function Home() {
  return (
    <>
      <Navbar />
      <LoginButton />
      <ImageSlider />
      <Store />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
