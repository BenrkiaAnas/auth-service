const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(cors());

// Development
// const MONGO_URI = 'mongodb://mongo-auth:27017/oc-auth-service';
// const PORT = 5000;

// Production
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB connection error", err));

// Use auth routes
app.use('/api/auth', authRoutes);

// Development
// app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));


// Production
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Auth Service running on port ${PORT}`);
});