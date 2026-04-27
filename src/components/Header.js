import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = ({ cartCount, allShoes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowDropdown(value.length > 0);
  };

  const handleResultClick = (shoeName) => {
    setSearchQuery('');
    setShowDropdown(false);
    setShowSearch(false);
    navigate('/shop', { state: { searchTarget: shoeName } });
  };

  const filteredShoes = allShoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header style={styles.header}>
      <h1>Sidekicks</h1>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/shop">Shop</Link>
        <Link style={styles.link} to="/about">About Us</Link>
        <Link style={styles.link} to="/contact">Contact Us</Link>
        <Link style={styles.link} to="/cart">Cart ({cartCount})</Link>

        <div style={{ position: 'relative', marginLeft: '15px' }}>
          <FaSearch
            style={{ color: '#fff', cursor: 'pointer', fontSize: '18px' }}
            onClick={() => setShowSearch(!showSearch)}
          />

          {showSearch && (
            <input
              type="text"
              placeholder="Search shoes..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          )}

          {showDropdown && (
            <div style={styles.dropdown}>
              {filteredShoes.length > 0 ? (
                filteredShoes.map((shoe) => (
                  <div
                    key={shoe.id}
                    style={styles.dropdownItem}
                    onClick={() => handleResultClick(shoe.name)}
                  >
                    {shoe.name}
                  </div>
                ))
              ) : (
                <div style={styles.dropdownItem}>No matches</div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  },
  searchInput: {
    padding: '5px',
    borderRadius: '4px',
    border: 'none',
    marginLeft: '5px',
    width: '140px',
  },
  dropdown: {
    position: 'absolute',
    top: '30px',
    left: '0',
    backgroundColor: '#fff',
    color: '#000',
    width: '160px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    borderRadius: '4px',
    zIndex: 1001,
  },
  dropdownItem: {
    padding: '5px 10px',
    borderBottom: '1px solid #ddd',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Header;
