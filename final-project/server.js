//Instantiate nedb Database
var datastore = require("nedb"),
  db = new datastore({ filename: "database.json", autoload: true });

//Instantiate App and Express
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
//Instantiate BodyParser
var urlencodedBodyParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedBodyParser);

app.use(express.static("public"));
app.use("/whateverrouteyouwant", express.static("whateverfolderthefilesarein"));

//EJS Template
app.set("view engine", "ejs");

//Default Route
app.get("/", function (req, res) {
  res.send("Hello World!");
});

//Retrieve IDs
app.get("/displayrecord", function (req, res) {
  db.find({ _id: req.query._id }, function (err, docs) {
    var dataWrapper = { data: docs[0] };
    res.render("individual.ejs", dataWrapper);
  });
});

//Add Search
// app.get('/search', function (req, res) {
//   // /search?q=text to search for
//   console.log('Search for: ' + req.query.q);
//   //Search - Add reg ex here
//   db.find({ text: req.query.q }, function (err, docs) {
//     var dataWrapper = { data: docs };
//     res.render('outputtemplate.ejs', dataWrapper);
//   });
// });

//Form Route
app.post("/formdata", function (req, res) {
  console.log(req.body);

  //Data Object
  var dataToSave = {
    answer1: req.body.q1,
    answer2: req.body.q2,
    answer3: req.body.selectlist,
    answer4: req.body.q4,
  };

  //nedb Database
  db.insert(dataToSave, function (err, newDoc) {
    db.find({}, function (err, docs) {
      var dataWrapper = { data: docs };
      res.render("outputtemplate.ejs", dataWrapper);
    });
    console.log(newDoc);
  });
});

//Server Listen on a Port
app.listen(80, function () {
  console.log("Example app listening on port 80!");
});
