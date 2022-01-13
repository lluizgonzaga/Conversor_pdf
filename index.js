const express = require("express");

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(express.static("public"));

const fs = require('fs');

const multer =  require('multer');

const PORT = process.env.PORT || 3000;


var dir = "public";
var subDirectory = "public/uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  fs.mkdirSync(subDirectory);
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post('/merge', (res,req) => {

});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});