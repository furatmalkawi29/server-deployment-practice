'use strict';

const express = require('express');
const app = express();

const error500Handler=require('./err_handlers/500.js')
const error404Handler=require('./err_handlers/404.js')


app.get('/',(req,res)=> {
  res.send('hello user');
  // throw new Error ('something went wrong :)');

});

app.get('/bad',(req,res)=> {
  // res.send('something went wrong :)');
  throw new Error ('something went wrong :)');
});

app.get('*',error404Handler);

app.use(error500Handler);
app.use(error404Handler);





function start (port){
  app.listen(port, ()=> {
    console.log(`Listening on PORT ${port}`);
  });
}


module.exports= {
  app:app,
  start:start,
};