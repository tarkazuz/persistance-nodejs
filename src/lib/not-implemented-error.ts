export default class NotImplementedError extends Error {
  constructor(message = 'Not implemented yet') {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
