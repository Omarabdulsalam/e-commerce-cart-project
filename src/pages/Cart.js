import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const { name, email, address } = customerInfo;

    if (!name || !email || !address) {
      alert('Please fill in all your information.');
      return;
    }

    const confirmation = window.confirm(
      `Are you sure you want to buy? Total Price: $${totalPrice.toFixed(2)}`
    );
    if (!confirmation) return;

    const orderDetails = cartItems
      .map((item) => `${item.name} - $${item.price}`)
      .join('\n');

    fetch('http://localhost:5000/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        address,
        orderDetails,
        total: totalPrice,
        items: cartItems,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(() => {
        alert('Order placed successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to place order.');
      });
  };

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={styles.emptyText}><b>Your cart is empty.</b></p>
      ) : (
        <div style={styles.cartBox}>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <p>{item.name} - ${item.price}</p>
              <button
                onClick={() => removeFromCart(index)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <h3 style={{ marginTop: '20px' }}>Customer Info</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={customerInfo.name}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={customerInfo.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={customerInfo.address}
            onChange={handleInputChange}
            style={styles.input}
          />

          <button onClick={handleOrder} style={styles.buyButton}>
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px 20px',
    minHeight: '80vh',
  },
  emptyText: {
    fontSize: '18px',
  },
  cartBox: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  buyButton: {
    padding: '12px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Cart;
