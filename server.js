// server.js

// load express as a deoendency
const express = require('express');

// Define Express App
const app = express();

// Defile the server host IP and port
const HOST = '127.0.0.1';
// if port defined in ENV, use that value, otherwise 3000
const PORT = process.env.PORT || 3000;

// Serve Static Assets from the public folder
app.use(express.static('public'));

// Start the server and listen for requests
app.listen(PORT, HOST, () => {
  console.log(`Server connected at http://${HOST}:${PORT}`);
});