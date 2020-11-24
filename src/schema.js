module.exports = {
    CREATE_SCHEMA_SQL: `CREATE TABLE IF NOT EXISTS "books" (id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(255));
                        ALTER TABLE "books" ADD CONSTRAINT title_author_uniqueness UNIQUE(title, author)`,
    DROP_SCHEMA_SQL: `DROP TABLE IF EXISTS "books";`
};