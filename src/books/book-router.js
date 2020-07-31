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
        let result;
        try {
            result = await bookService.getBookByTitle(req.params.title);
            res.send(result);
        } catch (exception) {
            res.send(exception);
        }
    })

    this.router.post('/', async (req, res) => {
        let result;
        try {
            result = await bookService.addBook(req.body);
            res.send(result);
        } catch (exception) {
            res.send(exception);
        }
    })
};