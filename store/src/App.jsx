import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Cancel from "../pages/Cancel";
import Store from "../pages/Store";
import Success from "../pages/Success";
import { CartProvider } from "./CartContext";
import ImageSlider from "./components/imageslider/ImageSlider";
import { images } from "./components/imageslider/SliderData";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery/Gallery";

// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <CartProvider>
      {/* <Container> */}
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <ImageSlider images={images} />
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
      <Gallery />
      <Footer />
      {/* </Container> */}
    </CartProvider>
  );
}

export default App;
