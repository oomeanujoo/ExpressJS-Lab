// index.js or app.js
const express = require('express');
const connectDB = require('./config/db');
const session = require('express-session');
const userRoutes = require('./routes/userRoute');
// const authRoutes = require('./routes/authRoute'); // Ensure this is imported correctly
const path = require('path');
const corsMiddleware = require('./middleware/cors');
const authMiddleware = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Configure sessions
// app.use(session({
//     secret: process.env.SESSION_SECRET || 'fallbackSecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false } // Set secure: true if using HTTPS
// }));

// Use the CORS middleware before any other middleware
app.use(corsMiddleware);

// // Define authentication routes
// app.use('/api/auth', authRoutes); // Add auth routes here

// // Apply the authentication middleware to all routes AFTER the auth routes
// app.use(authMiddleware); // All routes will require authentication

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes
app.use('/api/users', userRoutes); // User API routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
