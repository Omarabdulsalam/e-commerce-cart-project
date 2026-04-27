import React, { useState }  from 'react';
import './Home.css';
import bannerImage from '../Assets/banner.jpg';

// Best Seller Shoes Images
import af1 from '../Assets/af1.jpg';
import jordan1 from '../Assets/jordan1.jpg';
import dunks from '../Assets/dunks.jpg';
import rs from '../Assets/rs.jpg';

// Brand Logos Images
import nikeLogo from '../Assets/nikelogo.png';

import adidasLogo from '../Assets/addidaslogo.jpg';
import jordanLogo from '../Assets/jordanlogo.png';
import yeezyLogo from '../Assets/yeezylogo.png';

const bestSellers = [
  { id: 1, name: 'AF1 Full White', price: 200, image: af1, tagline: 'Classic & Clean' },
  { id: 2, name: 'Jordan 1', price: 150, image: jordan1, tagline: 'Iconic Style' },
  { id: 3, name: 'Dunks', price: 180, image: dunks, tagline: 'Street Favorite' },
  { id: 4, name: 'Running Shoes', price: 100, image: rs, tagline: 'Run in Style' },
];

const Home = ({ addToCart }) => {
  
  const [addedShoe, setAddedShoe] = useState(null);

  return (
    <div className="home">

      {/* Banner */}
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-content">
          <h1 className="banner-title">SIDEKICKS</h1>
          <p className="banner-subtitle">
            Sidekicks — Exclusivity in Every Step. Discover luxury footwear crafted for those who stand apart.
            Unmatched style. Unrivaled craftsmanship. Your signature starts here.
          </p>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="best-seller-section">
        <h2>Best Seller Shoes</h2>
        <div className="best-seller-grid">
          {bestSellers.map((shoe) => (
            <div key={shoe.id} className="shoe-card">
              <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              <h3>{shoe.name}</h3>
              <p className="shoe-tagline">{shoe.tagline}</p>
              <p className="shoe-price">${shoe.price}</p>
              {addToCart && (
                <button onClick={() => { addToCart(shoe); setAddedShoe(shoe.id); setTimeout(() => setAddedShoe(null), 1500); }} className="add-to-cart-btn">
                  {addedShoe === shoe.id ? '✓ Added!' : 'Add to Cart'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="brands-section">
        <img src={nikeLogo} alt="Nike" />
        
        <img src={adidasLogo} alt="Adidas" />
        <img src={jordanLogo} alt="Jordan" />
        <img src={yeezyLogo} alt="Yeezy" />
      </div>

      {/* Join Community Section */}
      <div className="join-community">
        <h2>JOIN THE SIDEKICKS COMMUNITY AND GET YOUR 10% DISCOUNT!</h2>
     
      </div>

    </div>
  );
};

export default Home;
