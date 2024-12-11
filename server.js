const express = require('express');
const app = express();
const booksRoutes = require('./Routes/booksRoutes');

app.use(express.json());

app.use('/api', booksRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
