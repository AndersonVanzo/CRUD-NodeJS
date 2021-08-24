const express = require('express');
const server = express();

server.use(express.json());
const books = [];

// list books
server.get('/books', (req, res) => {
  return res.json(books);
});

// specific book
server.get('/books/:index', (req, res) => {
  return res.json(req.user);
});

// create books
server.post('/books', (req, res) => {
  const { name } = req.body;
  books.push(name);
  return res.json(books);
});

// edit books
server.put('/books/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  books[index] = name;
  return res.json(books);
});

// delete books
server.delete('/books/:index', (req, res) => {
  const { index } = req.params;
  books.splice(index, 1);
  return res.send();
});

server.listen(3000);