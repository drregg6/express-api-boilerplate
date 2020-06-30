const express = require('express');
const app = express();

// Middleware
const PORT = process.env.PORT || 3000;

// Routes
app.use(`/api/users`, require(`./routes/api/users`));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));