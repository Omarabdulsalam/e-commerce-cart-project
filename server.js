const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// SQL Server config
const dbConfig = {
  user: 'SA',
  password: 'StrongPass123!',
  server: 'localhost',
  database: 'shoestore',
  options: {
    trustServerCertificate: true,
  },
};
// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdelsalamomar30@gmail.com',
    pass: 'uvpi bwjk ohla acny',
  },
});

// ========================
// CONTACT ROUTE (was missing)
// ========================
app.post('/api/contact', async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // Insert into Contacts table using parameterized query
    await pool.request()
      .input('name', sql.NVarChar, name)
      .input('email', sql.NVarChar, email)
      .input('message', sql.NVarChar, message)
      .query('INSERT INTO Contacts (name, email, message) VALUES (@name, @email, @message)');

    // Send notification email to store owner
    await transporter.sendMail({
      from: 'abdelsalamomar30@gmail.com',
      to: 'abdelsalamomar30@gmail.com',
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
});

// ========================
// ORDER ROUTE (fixed with parameterized queries)
// ========================
app.post('/api/order', async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const { name, email, address, orderDetails, total, items } = req.body;
    const quantity = items?.length || 0;

    // Insert into Orders using parameterized query
    const orderResult = await pool.request()
      .input('name', sql.NVarChar, name)
      .input('email', sql.NVarChar, email)
      .input('address', sql.NVarChar, address)
      .input('orderDetails', sql.NVarChar, orderDetails)
      .input('total', sql.Decimal(10, 2), total)
      .query(`
        INSERT INTO Orders (name, email, address, orderDetails, total)
        OUTPUT INSERTED.id
        VALUES (@name, @email, @address, @orderDetails, @total)
      `);

    const orderId = orderResult.recordset[0].id;

    // Insert into OrderQuantities using parameterized query
    await pool.request()
      .input('order_id', sql.Int, orderId)
      .input('quantity', sql.Int, quantity)
      .query('INSERT INTO OrderQuantities (order_id, quantity) VALUES (@order_id, @quantity)');

    // Send confirmation email to customer
    await transporter.sendMail({
      from: 'abdelsalamomar30@gmail.com',
      to: email,
      subject: 'Order Confirmation - Sidekicks',
      text: `Dear ${name},\n\nThank you for your order!\n\n${orderDetails}\n\nTotal: $${total}\n\nShipping to: ${address}\n\nWe will process your order shortly.`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ success: false, error: 'Failed to place order.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});