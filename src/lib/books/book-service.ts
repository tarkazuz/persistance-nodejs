import UniqueConstraintViolationError from '../unique-constraint-violation-error.js'
import { Book, BookPayload } from './book.js'
import {Pool, DatabaseError} from 'pg'

export default class BookService {
  static UNIQUE_VIOLATION_ERROR_CODE = '23505'
  private pool : Pool

  constructor(pool: Pool) {
    this.pool = pool
  }

  async getAllBooks(): Promise<Book[]> {
    const queryResult = await this.pool.query<Book>('SELECT title, author, id FROM books')
    return queryResult.rows
  }

  async addBook(book: BookPayload): Promise<void> {
    try {
      await this.pool.query('INSERT INTO BOOKS (title, author) VALUES ($1, $2)', [ book.title, book.author])
    }
    catch(e: unknown){
      if((e as DatabaseError).code === BookService.UNIQUE_VIOLATION_ERROR_CODE){
        throw new UniqueConstraintViolationError
      }
      throw new Error
    }
  }
}
