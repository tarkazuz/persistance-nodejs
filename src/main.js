'use strict';

const { CREATE_SCHEMA_SQL } = require('./schema');
const Server = require('./server');
const DB = require('./db');
const BookRouter = require('./books/book-router');
const BookService = require('./books/book-service');

(async function () {
    const db = new DB();
    await db.query(CREATE_SCHEMA_SQL);
    const bookService = new BookService(db);
    const bookRouter = new BookRouter(bookService);
    new Server(bookRouter);
})();