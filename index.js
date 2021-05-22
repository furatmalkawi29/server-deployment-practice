'use strict';

//setup
require('dotenv').config();
const port = process.env.PORT || 500;


//import
const server = require('./server.js');

// start app 
server.start(port);