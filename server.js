const connectDb = require('./config/db');
const express = require('express');
const app = express();

// Middleware
const PORT = process.env.PORT || 3000;

// Connect to DB
connectDb();

// Routes
app.use(`/api/users`, require(`./routes/api/users`));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));