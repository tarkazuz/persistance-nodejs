const BookService = require('../../src/books/BookService');
const assert = require('assert');
const DB = require('../DB');
const startPostgresContainer = require('../startPostgresContainer');
const { doesNotMatch } = require('assert');

describe('BookService', () => {

    let service;
    let container;
    before(async function () {
        this.timeout(0);
        container = await startPostgresContainer();

        const db = new DB(container.getPort());
        await db.query(`CREATE TABLE "author" (id SERIAL PRIMARY KEY, name VARCHAR(255))`);
        await db.query(`CREATE TABLE "book" (id SERIAL PRIMARY KEY, title VARCHAR(255), author_id integer,
        FOREIGN KEY (author_id) REFERENCES author (id))`);

        service = new BookService(db);
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