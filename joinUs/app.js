var express = require("express");
var app = express();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us",
});

app.get("/", function (req, res) {
  // console.log(req);
  //find count users in database
  //respond with the count
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function (error, results) {
    if (error) throw error;
    var count = results[0].count;
    res.send(`we have ${count} users in our database`);
  });
});

app.get("/joke", function (req, res) {
  var joke =
    "What do you call a dog that does magic tricks? A labracadabrador!";
  res.send(joke);
});

app.get("/random_num", function (req, res) {
  var x = Math.floor(Math.random() * 10) + 1;
  res.send(`your lucky number is ${x}`);
});

app.listen(8080, function () {
  console.log("Server running on 8080");
});
