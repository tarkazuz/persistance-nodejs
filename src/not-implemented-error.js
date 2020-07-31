module.exports = class NotImplementedError extends Error {
    constructor(message) {
        super(message || 'Not implemented yet');
    }
};