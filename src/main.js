'use strict';

const { CREATE_SCHEMA_SQL } = require('./schema');

(async function () {
    const Server = require('./server');
    const db = require('./db');
    const BookRouter = require('./books/book-router');
    const BookService = require('./books/book-service');

    await db.query(CREATE_SCHEMA_SQL);
    const bookService = new BookService(db);
    const bookRouter = new BookRouter(bookService);
    const server = new Server(bookRouter);
})();