//Connect Week 2

//Instantiate App
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
console.log("Hello!");

//Body-Parser
var urlencodedBodyParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedBodyParser);

app.use(express.static("public"));

//Data Array
var submittedData = [];

//Default Route
app.get("/", function (req, res) {
  res.send("Hello World!");
});

//Form Route
app.post("/formdata", function (req, res) {
  console.log(req.body);
  // console.log(req.query.data);
  // var dataToSave = new Object();
  // dataToSave.text = req.body;

  //Data Array
  var dataToSave = {
    answer1: req.body.q1,
    answer2: req.body.q2,
    answer3: req.body.selectlist,
    answer4: req.body.q4,
  };

  submittedData.push(dataToSave);

  console.log(submittedData);

  //Response Form
  res.send(
    `
    <style>
      body {
        color: red;
        font-family: monospace
        
      }
      h1 {
        font-size: 6em;
      }
      p {
        font-size: 3em;
      }
      .answers {
        text-decoration: line-through;
      }
    </style>
    <div>
      <h1>Thanks for reaching out to CA.</h1> 
      <p style="text-decoration: none; background: black">You submitted: </p>
      <p class="answers">${dataToSave.answer1}</p> 
      <p class="answers">${dataToSave.answer2}</p> 
      <p class="answers">${dataToSave.answer3}</p> 
      <p class="answers">${dataToSave.answer4}</p>
    </div>
    `
  );
});

//Server Listen on a Port
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
