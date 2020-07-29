'use strict';

const express = require('express');

module.exports = function (bookService) {
    this.router = express.Router();

    this.router.get('/', async (req, res) => {
        let result;
        try {
            result = await bookService.getAllBooks();
            res.send(result);
        } catch (exception) {
            res.send(exception);
        }
    })

    this.router.get('/:title', async (req, res) => {
        res.send(await bookService.getBookByTitle(req.params.title));
    })

    this.router.post('/', async (req, res) => {
        res.send(await bookService.addBook(req.body));
    })
};