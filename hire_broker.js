const express = require('express');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "BrokerBridge",
    password: "12345678",
    port: 5432,
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT b_name, b_description FROM brokers');

    res.render('index', { brokers: rows });
  } catch (err) {
    console.error('Error fetching data from database:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

