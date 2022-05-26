const server = require('./server');
const repository = require('../src/models/devotional-model');
const { dbConnect } = require('../src/db/connection');
const app = server(repository);
const PORT = process.env.PORT;

dbConnect();

app.listen(PORT | 3000, () => {
    console.log(`[devotional] UP:${PORT}`)
}).on('error_devotional', (err) => {
    console.log(`ERROR: ${err}`);
    process.exit(1);
});
