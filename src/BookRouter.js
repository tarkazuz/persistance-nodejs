'use strict';

const express = require('express');

module.exports = function() {
    this.router = express.Router();
    
    this.router.get('/', (req, res) => {
        res.send('Hello World!');
    })

    this.router.get('/:title', (req, res) => {
        // TODO
    })

    this.router.post('/', (req, res) => {
        // TODO
    })
}