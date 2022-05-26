const express = require('express');

const server = (db) => {
    const app = express();
    app.use(express.json())

    require('./routes')(app, db)

    return app;
}

module.exports = server