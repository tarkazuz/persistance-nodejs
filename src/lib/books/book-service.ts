import { Book } from './book.js'

interface BookStorage {
  getAllBooks(): Promise<Book[]>
  addBook(book: Book): Book
  getBookByTitle(title: string): Book
}

