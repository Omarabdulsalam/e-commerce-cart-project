import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.css';

// ✅ All shoes data
const allShoesArray = [
  { id: 1, name: 'AF1 Full White' },
  { id: 2, name: 'Jordan 1' },
  { id: 3, name: 'Dunks' },
  { id: 4, name: 'Running Shoes' },
  { id: 5, name: 'Sambas' },
  { id: 6, name: 'Yeezy Boost' },
  { id: 7, name: 'Vans Old Skool' },
  { id: 8, name: 'Puma RS-X' },
  { id: 9, name: 'New Balance 550' },
  { id: 10, name: 'Nike Cortez' },
  { id: 11, name: 'Adidas Superstar' },
  { id: 12, name: 'Asics Gel Lyte' },
  { id: 13, name: 'Converse All-Star' },
  { id: 14, name: 'Fila Disruptor' },
  { id: 15, name: 'Reebok Classic' },
  { id: 16, name: 'Balenciaga Triple S' },
  { id: 17, name: 'Gucci Ace' },
  { id: 18, name: 'Off-White Nike' },
  { id: 19, name: 'Onitsuka Tiger' },
  { id: 20, name: 'Lacoste Gripshot' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => setCart([...cart, shoe]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <Router>
      <Header cartCount={cart.length} allShoes={allShoesArray} /> {/* ✅ Important */}

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
