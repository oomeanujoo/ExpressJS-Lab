// index.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');
const path = require('path'); // Import path module
const corsMiddleware = require('./middleware/cors'); // Import the CORS middleware

const app = express();
connectDB();

// Use the CORS middleware
app.use(corsMiddleware); // Apply the CORS middleware

app.use(express.json()); // Middleware to parse JSON requests

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
