const express = require('express');
const cors = require('cors');
const server = (db) => {
    const app = express();
    app.use(cors());
    app.use(express.json())

    require('./routes')(app, db)

    return app;
}

module.exports = server