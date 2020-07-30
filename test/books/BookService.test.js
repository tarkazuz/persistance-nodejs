const BookService = require('../../src/books/BookService');
const assert = require('assert');
const DB = require('../db');
const { GenericContainer, Wait } = require('testcontainers');
const { Duration, TemporalUnit } = require('node-duration');
const { doesNotMatch } = require('assert');

describe('BookService', () => {

    let service;
    let container;
    before(async function () {
        this.timeout(0);
        const pgPort = 5432;
        container = await new GenericContainer('postgres', '12')
            .withEnv('POSTGRES_PASSWORD', 'pw')
            .withHealthCheck({
                test: "pg_isready",
                interval: new Duration(1, TemporalUnit.SECONDS),
                timeout: new Duration(3, TemporalUnit.SECONDS),
                retries: 5,
                startPeriod: new Duration(1, TemporalUnit.SECONDS)
            })
            .withWaitStrategy(Wait.forHealthCheck())
            .withExposedPorts(pgPort)
            .start();

        const mappedPort = container.getMappedPort(pgPort);

        const db = new DB(mappedPort);
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
    })
});