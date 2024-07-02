const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Integrate third-party middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Set up basic routes
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('This server is set up to demonstrate basic Express functionality.');
});

// Handle non-existent routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
