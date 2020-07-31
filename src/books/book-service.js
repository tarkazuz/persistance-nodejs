const NotImplementedError = require('../not-implemented-error');

module.exports = function () {
    this.getAllBooks = async () => {
        throw new NotImplementedError();
    };

    this.addBook = async (book) => {
        throw new NotImplementedError();
    };

    this.getBookByTitle = async (title) => {
        throw new NotImplementedError();
    };
};