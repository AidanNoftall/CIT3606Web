var http = require('http');
      const express = require('express');
const app = express();
app.get('/', function(req, res){
   res.send("Home page");
});
app.get('/hello', function(req, res){
   res.send("Hello world page!");
});
app.listen(8080);
