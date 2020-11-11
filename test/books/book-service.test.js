const assert = require('assert');
const NotImplementedError = require('../../src/not-implemented-error');

describe('BookService', function () {

    // TODO: replace this object with the Pool of node-postgres driver at ex 1.3
    const pool = {
        query: async () => {
            throw new NotImplementedError();
        }
    };

    it('should connect to the database', async function() {
        assert.fail('TODO');
    });
});