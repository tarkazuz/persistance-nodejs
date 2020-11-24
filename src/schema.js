module.exports = {
    CREATE_SCHEMA_SQL: `CREATE TABLE IF NOT EXISTS "book" (id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(255));
                        ALTER TABLE "book" ADD CONSTRAINT title_author_uniqueness UNIQUE(title, author)`,
    DROP_SCHEMA_SQL: `DROP TABLE IF EXISTS "book";`
};