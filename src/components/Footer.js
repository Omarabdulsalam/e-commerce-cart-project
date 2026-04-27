import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerContent}>
      <div style={styles.column}>
        <h3 style={styles.columnTitle}>QUICK LINKS</h3>
        <Link style={styles.link} to="/shop">Shop</Link>
        <Link style={styles.link} to="/cart">Cart</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>

      <div style={styles.column}>
        <h3 style={styles.columnTitle}>LET'S CONNECT</h3>
        <p style={styles.link}>Instagram</p>
        <p style={styles.link}>TikTok</p>
      </div>

      <div style={styles.column}>
        <h3 style={styles.columnTitle}>LOYALTY PROGRAM</h3>
        <p style={styles.link}>Sidekrew</p>
      </div>
    </div>

    <p style={styles.copyright}>© 2026 Shoe Store. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#4B709F',
    color: '#fff',
    padding: '30px 20px 10px',
    marginTop: 'auto',
    marginBottom: '0',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    minWidth: '150px',
    marginBottom: '15px',
  },
  columnTitle: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '8px',
    display: 'block',
    fontSize: '14px',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '13px',
  },
};

export default Footer;
