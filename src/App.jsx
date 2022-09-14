import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Product from "./Components/ProductList/Product";
import Slider from "./Components/Slider/Slider";
export default function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
}
