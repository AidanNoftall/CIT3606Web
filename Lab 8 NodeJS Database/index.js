const express = require('express'); 
const app = express();

const mysql = require('mysql');
require('dotenv').config();               
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
conn.connect((err) => {          
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, res){
   const sql = 'SELECT * FROM students WHERE lastname = ?';
const lastname = "Mouse"; 
conn.query(sql, [lastname], function (err, result) {
  if (err) throw err;
  console.log(result);
 res.send(result);
});
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', function(req, res){
   res.sendFile(__dirname + "/formsubmit.html");
});

app.post('/submit', function(req, res){
  const sql = 'SELECT * FROM users WHERE lastname = ?';
  console.log("Form contents: " + req.body.lastname);
  conn.query(sql, [req.body.lastname], function (err, result) {
    if (err) throw err;
    if (result.length == 0)  { res.send("no result"); }
    else {  console.log(result);
              resultStr = "";  
for (i = 0; i < result.length; i++) {
      resultStr += result[i].firstname +  " " + 
                           result[i].lastname + "<br>"  ;
   }
 res.send(resultStr);
          
   }  }  );
});  

app.post('/insert', function(req, res){
   const sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  conn.query(sql, [req.body.username, req.body.password, req.body.email],  
   function (err, result) {
      if (err) throw err;
      res.send("Account Creation Successful");
     });
});

app.get('/new', function(req, res){
   res.sendFile(__dirname + "/formcreate.html");
});

app.post('/insert', function(req, res){
   const sql = "INSERT INTO users (email) VALUES (?)";
  conn.query(sql, [req.body.email],  
   function (err, result) {
      if (err) throw err;
      res.send("Enter");
     });
});

app.get('/forgot', function(req, res){
   res.sendFile(__dirname + "/formforgot.html");
});

app.post('/retrieve', function(req, res){
    const sql = 'SELECT * FROM users WHERE email = ?';
  conn.query(sql, [req.body.email], function (err, result) {
    if (err) throw err;
    if (result.length == 0)  { res.send("no result"); }
    else {  console.log(result);
              resultStr = "";  
for (i = 0; i < result.length; i++) {
      resultStr += "Password: " + result[i].password + "<br>"  ;
   }
  res.send(resultStr);
    }  }  );
});

app.listen(8080);