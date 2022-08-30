var faker = require("faker");
var mysql = require("mysql");

// connet to mysqk
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
  password: "password",
});

//run queries
var q = "SELECT *  FROM users";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

// insert data
// var person1 = {email: faker.internet.email()};
// connection.query("INSERT INTO users SET ?", person1, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var person2 = {
//   email: faker.internet.email(),
//   created_at: faker.date.past(),
// };

// connection.query("INSERT INTO users SET ?", person2, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//insert lots of data ---------------------------------
var data = [];
for (var i = 0; i < 500; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}
var q = "INSERT INTO users (email, created_at) VALUES ?";
connection.query(q, [data], function (err, result) {
  if (err) throw err;
  console.log(result);
});

connection.end();
