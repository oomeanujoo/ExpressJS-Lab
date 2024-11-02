// middleware/cors.js
const cors = require('cors');

const corsOptions = {
  origin: '*', // Allow any origin to access
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Enable credentials (you might need to set this to false if using '*')
  optionsSuccessStatus: 200 // For legacy browser support
};

module.exports = cors(corsOptions); // Export the configured CORS middleware
