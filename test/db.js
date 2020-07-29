const { Pool } = require('pg');


module.exports = function(port) {
    const pool = new Pool({
        database: 'postgres',
        user: 'postgres',
        password: 'pw',
        port: port || 5432
    });

    this.query = (...args) => pool.query(...args)
}