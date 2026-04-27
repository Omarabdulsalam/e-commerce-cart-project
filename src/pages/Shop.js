import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Shop.css';

import af1 from '../Assets/af1.jpg';
import jordan1 from '../Assets/jordan1.jpg';
import dunks from '../Assets/dunks.jpg';
import rs from '../Assets/rs.jpg';
import sambas from '../Assets/sambas.jpg';
import allstar from '../Assets/allstar.jpg';
import asics from '../Assets/asics.jpg';
import cortez from '../Assets/cortez.jpg';
import fila from '../Assets/fila.jpg';
import gucci from '../Assets/gucci.jpg';
import lacost from '../Assets/lacost.jpg';
import nb from '../Assets/nb.jpg';
import offwhite from '../Assets/offwhite.jpg';
import puma from '../Assets/puma.jpg';
import rebok from '../Assets/rebok.jpg';
import superstar from '../Assets/superstar.jpg';
import tiger from '../Assets/tigerjpg.jpg';
import triplex from '../Assets/tripplex.jpg';
import vans from '../Assets/vans.jpg';
import yeezy from '../Assets/yeezy.jpg';

const shoes = [
  { id: 1, name: 'AF1 Full White', price: 200, image: af1, tagline: 'Classic & Clean' },
  { id: 2, name: 'Jordan 1', price: 150, image: jordan1, tagline: 'Iconic Style' },
  { id: 3, name: 'Dunks', price: 180, image: dunks, tagline: 'Street Favorite' },
  { id: 4, name: 'Running Shoes', price: 100, image: rs, tagline: 'Run in Style' },
  { id: 5, name: 'Sambas', price: 130, image: sambas, tagline: 'Retro Classic' },
  { id: 6, name: 'Yeezy Boost', price: 220, image: yeezy, tagline: 'Hype Beast' },
  { id: 7, name: 'Vans Old Skool', price: 90, image: vans, tagline: 'Skate Classic' },
  { id: 8, name: 'Puma RS-X', price: 110, image: puma, tagline: 'Bold Comfort' },
  { id: 9, name: 'New Balance 550', price: 140, image: nb, tagline: 'Casual Fit' },
  { id: 10, name: 'Nike Cortez', price: 85, image: cortez, tagline: 'Vintage Vibe' },
  { id: 11, name: 'Adidas Superstar', price: 95, image: superstar, tagline: 'Timeless Icon' },
  { id: 12, name: 'Asics Gel Lyte', price: 130, image: asics, tagline: 'Performance First' },
  { id: 13, name: 'Converse All-Star', price: 80, image: allstar, tagline: 'Street Legend' },
  { id: 14, name: 'Fila Disruptor', price: 75, image: fila, tagline: 'Chunky Cool' },
  { id: 15, name: 'Reebok Classic', price: 70, image: rebok, tagline: 'Everyday Wear' },
  { id: 16, name: 'Balenciaga Triple S', price: 650, image: triplex, tagline: 'Luxury Statement' },
  { id: 17, name: 'Gucci Ace', price: 550, image: gucci, tagline: 'Designer Sneak' },
  { id: 18, name: 'Off-White Nike', price: 700, image: offwhite, tagline: 'Hype Drop' },
  { id: 19, name: 'Onitsuka Tiger', price: 120, image: tiger, tagline: 'Sport Classic' },
  { id: 20, name: 'Lacoste Gripshot', price: 105, image: lacost, tagline: 'Casual Luxury' },
];

const Shop = ({ addToCart }) => {
  const location = useLocation();
  const shoeRefs = useRef({});

  useEffect(() => {
    if (location.state?.searchTarget) {
      const shoeName = location.state.searchTarget.toLowerCase();
      const matchedShoe = shoes.find((shoe) =>
        shoe.name.toLowerCase() === shoeName
      );
      if (matchedShoe && shoeRefs.current[matchedShoe.id]) {
        shoeRefs.current[matchedShoe.id].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);

  return (
    <div className="shop-container">
      <h2 className="shop-title">Explore Our Collection</h2>
      <div className="shoe-grid">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="shoe-card"
            ref={(el) => (shoeRefs.current[shoe.id] = el)}
          >
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <div className="shoe-details">
              <h3>{shoe.name}</h3>
              <p className="tagline">{shoe.tagline}</p>
              <p className="price">${shoe.price}</p>
              <button onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
