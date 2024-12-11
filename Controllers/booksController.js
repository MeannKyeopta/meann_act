const books = require('../Models/booksModel');

const getAllBooks = (req, res) => {
  res.status(200).json({
    success: true,
    data: books
  });
};

const getBooksByGenre = (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const filteredBooks = books.filter(book => book.genre.toLowerCase() === genre);

  if (filteredBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: `No books found for the genre: ${genre}`
    });
  }

  res.status(200).json({
    success: true,
    data: filteredBooks
  });
};

module.exports = {
  getAllBooks,
  getBooksByGenre
};
