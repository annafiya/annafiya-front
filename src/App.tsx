import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ContactWithMap } from "./components/ContactWithMap";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import { NavModal } from "./components/NavModal";
import { Psorinorm } from "./components/Psorinorm";

function App() {
  return (
    <>
      <Navbar />
      <NavModal />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
