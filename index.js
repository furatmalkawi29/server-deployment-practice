
const server = require('./server.js');

require('dotenv').config();

const port = process.env.PORT || 500;

server.start(port);