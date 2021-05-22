'use strict';

//setup
const express = require('express');
const app = express();

//import
const error500Handler= require('./err_handlers/500.js');
const error404Handler= require('./err_handlers/404.js');


//routs
app.get('/', homeHandler);
app.get('/bad', errHandler);
app.get('*',error404Handler);


// rout handlers

/**
 * This function accepts HTTP request object and HTTP response object,
 * it handles rout (/) . It sends back a welcoming
 * messege as a response 
 * 
 * 
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 */

function homeHandler (req,res) {
  res.send('hello user');
  // throw new Error ('something went wrong :)');

}



/**
 * This function accepts HTTP request object and HTTP response object,
 * it handles rout (/bad) . It throws an error which will cause 
 * running error500Handler function .
 * 
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 */

function errHandler (req,res){
  // res.send('something went wrong :)');
  throw new Error ('something went wrong :)');
}



//use 
app.use(error500Handler);
app.use(error404Handler);




//listener

/**
 * This function accepts the port number, then use it to call 
 * listen function . It makes the server start 
 * listening to upcoming requests .
 * 
 * @param {number} port Server's port
 */


function start (port){
  app.listen(port, ()=> {
    console.log(`Listening on PORT ${port}`);
  });
}


//export modules
module.exports= {
  app:app,
  start:start,
};