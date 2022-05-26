const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL.split(',')
const uri = mongoUrl[0];
const config = mongoUrl[1];
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const mongoUri = `${uri}${user}:${password}${config}`

const dbConnect = () => {
    try {
        mongoose.connect(mongoUri);
        console.log(`[database] connected.`)
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

module.exports = { dbConnect };
