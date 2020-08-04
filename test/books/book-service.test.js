const assert = require('assert');
const BookService = require('../../src/books/book-service');
const startPostgresContainer = require('../start-pg-container');

describe('BookService', () => {

    let container;

    before(async () => {
        this.timeout(0);
        container = await startPostgresContainer();
    });

    after(async () => {
        this.timeout(0);
        await container.stop();
    });
});