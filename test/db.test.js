const assert = require('assert');
const startPostgresContainer = require('./start-pg-container');
const DB = require('./../src/db');

describe('db', function () {

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

    it('should connect to the database', async function() {
        // TODO
    });
});