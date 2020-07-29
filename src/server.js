'use strict';

const express = require('express');

module.exports = function(bookRouter) {
    const app = express();
    
    app.use(express.json());
    app.use(express.static(__dirname+'/../static'));
    app.use('/books', bookRouter.router);
    
    const port = 3000;
    app.listen(port, () => {
      console.log(`Started on http://localhost:${port}`);
    });
}