const assert = require('assert');
const BookService = require('../../src/books/book-service');

describe('BookService', function () {

    const pool = {
        // TODO: replace this object with the Pool of node-postgres driver at ex 1.2
        query = async () => {
            return undefined;
        }
    };

    it('should connect to the database', async function() {
        assert.fail('TODO');
    });
});