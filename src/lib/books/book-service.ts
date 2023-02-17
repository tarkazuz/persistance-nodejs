import { Book } from '../books/book'
import NotImplementedError from '../not-implemented-error'

export default class BookService {
  static UNIQUE_VIOLATION_ERROR_CODE = '23505'

  constructor() { }

  async getAllBooks ():Promise<Book[]> {
    throw new NotImplementedError()
  }

  async addBook(book:Book) {
    throw new NotImplementedError()
  }

  async getBookByTitle() {
    throw new NotImplementedError()
  }
}
