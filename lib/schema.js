export const CREATE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS "books"
  (id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(255));
  ALTER TABLE "books" DROP CONSTRAINT IF EXISTS title_author_uniqueness;
  ALTER TABLE "books" ADD CONSTRAINT title_author_uniqueness UNIQUE(title, author)`

export const DROP_TABLE_SQL = `DROP TABLE IF EXISTS "books";`
