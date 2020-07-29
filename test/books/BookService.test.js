const BookService = require('../../src/books/BookService');
const assert = require('assert');
const db = require('../db');
const { GenericContainer, Wait } = require("testcontainers");
const { doesNotMatch } = require('assert');

describe('BookService', () => {

    let service;
    let container;
    before(async function () {
        process.env.DEBUG = 'testcontainers'
        this.timeout(0);
        const pgPort = 5432;
        container = await new GenericContainer('postgres')
            .withEnv('POSTGRES_PASSWORD', 'pw')
            .withExposedPorts(pgPort)
            .start();

        console.log('after start');
        const mappedPort = container.getMappedPort(pgPort);
        console.log("Mapped Port: "+ mappedPort);


        service = new BookService(new db(mappedPort));
    }); 

    after(async function() {
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