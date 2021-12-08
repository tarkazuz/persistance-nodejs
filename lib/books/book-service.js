import NotImplementedError from '../not-implemented-error.js'

export default class BookService {
    static UNIQUE_VIOLATION_ERROR_CODE = '23505'

    constructor() {}

    async getAllBooks() {
        throw new NotImplementedError()
    }

    async addBook() {
        throw new NotImplementedError()
    }

    async getBookByTitle() {
        throw new NotImplementedError()
    }
}
