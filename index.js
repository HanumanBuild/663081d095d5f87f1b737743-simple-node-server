// Import express library
const express = require('express');

// Initialize express application
const app = express();

// Define the port to listen on
const PORT = 3000;

// Handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});