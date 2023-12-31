import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  function handleProductAdd(newProduct) {
    console.log("Adding product " + newProduct.id);
  }

  function handleProductDelete(id) {
    console.log("Deleting product " + id);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
