const BookService = require('../../src/books/book-service');
const assert = require('assert');
const DB = require('../../src/db');
const startPostgresContainer = require('../start-pg-container');
const { CREATE_SCHEMA_SQL, DROP_SCHEMA_SQL } = require('../../src/schema');

describe('BookService', () => {

    let service;
    let container;
    let db;
    before(async function () {
        this.timeout(0);
        container = await startPostgresContainer();

        db = new DB(container.getPort());
    });
    
    beforeEach(async function() {
        await db.query(CREATE_SCHEMA_SQL);
    
        service = new BookService(db);
    });

    afterEach(async function() {
        await db.query(DROP_SCHEMA_SQL);
    });

    after(async function() {
        this.timeout(0);
        await container.stop();
    });

    it('addBook', async ()  => {
        const title = 'someTitle';
        const book = {title};
        await service.addBook(book);

        const books = await service.getAllBooks();

        assert.equal(books[0].title, title);
    });
});