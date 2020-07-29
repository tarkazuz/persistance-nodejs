const { Pool } = require('pg');

const pool = new Pool({
    database: 'postgres',
    user: 'postgres',
    password: 'pw'
});

module.exports = {
    query: (...args) => pool.query(...args)
}