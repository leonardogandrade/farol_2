const { devotionalHandler } = require('./handlers/');

module.exports = (app, db) => {
    devotionalHandler(app, db)
}