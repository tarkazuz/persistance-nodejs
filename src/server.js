'use strict';

const express = require('express');
const NotImplementedError = require('./not-implemented-error');

module.exports = function(bookRouter) {
    const app = express();
    
    app.use(express.json());
    app.use(express.static(__dirname+'/../static'));
    app.use('/books', bookRouter.router);
    
    app.use((error, req, res, next) => {
      if(error instanceof NotImplementedError) {
        res.status(405).send(error.message);
      } else {
        res.status(500).send(error.message);
      }
    });
    
    const port = 3000;
    app.listen(port, () => {
      console.log(`Started on http://localhost:${port}`);
    });
}