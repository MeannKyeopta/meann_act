const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/booksController');

// Route to get all books
router.get('/books', booksController.getAllBooks);

// Route to get books by genre
router.get('/books/genre/:genre', booksController.getBooksByGenre);

module.exports = router;

