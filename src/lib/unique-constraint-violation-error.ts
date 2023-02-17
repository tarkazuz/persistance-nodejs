export default class UniqueConstraintViolationError extends Error {
  constructor(message = 'Unique constraint violated') {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
