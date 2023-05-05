import assert from 'assert/strict'
import pg, {Pool} from 'pg'
import BookService from '../../src/lib/books/book-service.js'
import {CREATE_TABLE_SQL, DROP_TABLE_SQL, TRUNCATE_TABLE} from '../../src/lib/schema.js'
import UniqueConstraintViolationError from '../../src/lib/unique-constraint-violation-error.js'

describe('BookService', () => {
  let pool: Pool
  let bookService: BookService
  before( () => {
    const config = {
    database: 'postgres',
    user: 'postgres',
    password: 'pw',
    port: 5432
    }
    pool = new pg.Pool(config)
    }
  )

  // before(async () => {
  //   await pool.query(CREATE_TABLE_SQL)
  // })

  before(() => {
    bookService = new BookService(pool)
  })

  beforeEach(async()=>{
    await pool.query(TRUNCATE_TABLE)
  })

  after(async()=>{
    // await pool.query(DROP_TABLE_SQL)
    await pool.end()
  })

  it('should connect to the database', async () => {
    const result = await pool.query('SELECT 1 as one')
    assert.deepEqual(result.rows, [{ one: 1 }])
  })

  it('should retrieve all books', async ()=>{
    const resultAllBooks = await bookService.getAllBooks()
    assert.deepEqual(resultAllBooks, [])
  })

  it('should add book"', async ()=>{
    const addedBook = { title: 'Refactoring', author: 'Martin Fowler' }
    await bookService.addBook(addedBook)
    const resultAddBooks = await bookService.getAllBooks()
    const id = resultAddBooks[0].id
    assert.deepEqual(resultAddBooks, [{...addedBook, id}])
  })

  it('should throw an error when unique constraint is violated', async ()=>{
    const addedBook = { title: 'Refactoring', author: 'Martin Fowler' }
    await bookService.addBook(addedBook)
    await assert.rejects(async () => {
      await bookService.addBook(addedBook)
      }, new UniqueConstraintViolationError())
  })
})

export { }
