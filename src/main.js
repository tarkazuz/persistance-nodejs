'use strict';

const Server = require('./server');
const BookRouter = require('./BookRouter');

const bookRouter = new BookRouter();
const server = new Server(bookRouter);