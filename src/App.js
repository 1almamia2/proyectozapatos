import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./routes/about";
import Products from './routes/products';
import Contact from "./routes/contact";
import ViewCart from './components/ViewCart';
import { CartProvider } from 'react-use-cart';
import Layout from './components/Layout/Layout';
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartProvider> <ViewCart /> </CartProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;