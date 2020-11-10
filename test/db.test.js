const assert = require('assert');
const DB = require('./../src/db');

describe('db', function () {

    let db = new DB(5432);

    it('should connect to the database', async function() {
        assert.fail('TODO');
    });
});