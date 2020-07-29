

module.exports = function (db) {
    this.getAllBooks = async () => {
        const result = await db.query('SELECT BOOK.title, AUTHOR.name as author FROM BOOK LEFT JOIN AUTHOR ON BOOK.author_id=AUTHOR.id');
        return result.rows.map(row => {
            return {title: row.title, author: {name: row.author}};
        });
        // throw new Error('Not implemented yet');
    };

    this.addBook = async (book) => {
        return await db.query('INSERT INTO BOOK (id, title) VALUES (nextval(\'hibernate_sequence\'), $1)', [book.title])
    };

    this.getBookByTitle = (title) => {
        throw new Error('Not implemented yet');
    };
};