// middleware/cors.js
const cors = require('cors');

const corsOptions = {
  origin: '*', // Adjust as needed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Authorization'],
};

module.exports = cors(corsOptions);
