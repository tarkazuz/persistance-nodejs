'use strict';

const express = require('express');

module.exports = function (bookService) {
    this.router = express.Router();

    this.router.get('/', async (req, res, next) => {
        try {
            const result = await bookService.getAllBooks();
            res.send(result);
        } catch(error) {
            next(error);
        }
    });

    this.router.get('/:title', async (req, res, next) => {
        try {
            const result = await bookService.getBookByTitle(req.params.title);
            res.send(result);
        } catch(error) {
            next(error);
        }
    });

    this.router.post('/', async (req, res, next) => {
        try {
            const result = await bookService.addBook(req.body);
            res.send(result);
        } catch(error) {
            next(error);
        }
    });
};