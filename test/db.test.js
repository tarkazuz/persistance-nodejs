const assert = require('assert');
const DB = require('./../src/db');

describe('db', function () {
    let db;

    before(async function () {
        db = new DB(5432);
    });

    after(async function () {
    });

    it('should connect to the database', async function() {
        assert.fail('TODO');
    });
});