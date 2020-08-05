'use strict';

const Server = require('./server');
const BookRouter = require('./books/book-router');
const BookService = require('./books/book-service');
const DB = require('./db');

(async function () {
    const db = new DB();
    const bookService = new BookService(db);
    const bookRouter = new BookRouter(bookService);
    new Server(bookRouter);
})();