const assert = require('assert');
const BookService = require('../../src/books/book-service');
const startPostgresContainer = require('../start-pg-container');
const DB = require('./../../src/db');

describe('BookService', function () {

    let container;
    let db;

    before(async function () {
        this.timeout(0);
        container = await startPostgresContainer();
        db = new DB(container.getPort());
    });

    after(async function () {
        this.timeout(0);
        await container.stop();
    });
});
