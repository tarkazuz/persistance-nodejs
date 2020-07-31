const startPostgresContainer = require('../start-pg-container');

describe('BookService', () => {

    let container;

    before(async function () {
        this.timeout(0);
        container = await startPostgresContainer();
    });

    after(async function () {
        this.timeout(0);
        await container.stop();
    });
});