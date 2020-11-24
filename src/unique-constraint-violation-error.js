module.exports = class UniqueConstraintViolationError extends Error {
    constructor(message) {
        super(message || 'Unique constraint violated');
    }
};