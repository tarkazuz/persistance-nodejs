'use strict';

const Server = require('./server');
const BookRouter = require('./BookRouter');
const BookService = require('./books/BookService');
const db = require('./db');

const bookService = new BookService(db);
const bookRouter = new BookRouter(bookService);
const server = new Server(bookRouter);