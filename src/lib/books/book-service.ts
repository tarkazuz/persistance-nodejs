import NotImplementedError from '../not-implemented-error.js'
import { Book, BookPayload } from './book.js'

export default class BookService {
  static UNIQUE_VIOLATION_ERROR_CODE = '23505'

  constructor() {
    throw new NotImplementedError('Not implemented yet.')
  }

  async getAllBooks(): Promise<Book[]> {
    throw new NotImplementedError('Not implemented yet.')
  }

  async addBook(book: BookPayload): Promise<void> {
    throw new NotImplementedError('Not implemented yet.')
  }
}
