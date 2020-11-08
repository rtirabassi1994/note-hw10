// This will be your standard server.js file where you
// will initialize the server 

var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//dont forget to require routes
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  