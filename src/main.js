'use strict';

const Server = require('./server');
const BookRouter = require('./books/book-router');
const BookService = require('./books/book-service');

(async function () {
    const bookService = new BookService();
    const bookRouter = new BookRouter(bookService);
    new Server(bookRouter);
})();