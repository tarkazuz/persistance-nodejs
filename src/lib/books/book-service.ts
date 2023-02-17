import { Book } from './book'

interface BookStorage{
  getAllBooks ():Promise<Book[]>;
  addBook(book:Book):Book;
  getBookByTitle(title:String):Book;
}

