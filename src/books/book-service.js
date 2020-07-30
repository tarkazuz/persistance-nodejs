

module.exports = function (db) {
    this.getAllBooks = async () => {
        const result = await db.query('SELECT title, author FROM BOOK');
        return result.rows.map(row => {
            return {title: row.title, author: row.author};
        });
        // throw new Error('Not implemented yet');
    };

    this.addBook = async (book) => {
        return await db.query('INSERT INTO BOOK (title, author) VALUES ($1, $2)', [book.title, book.author]);
    };

    this.getBookByTitle = (title) => {
        throw new Error('Not implemented yet');
    };
};