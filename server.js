// This will be your standard server.js file where you
// will initialize the server 

var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

var app = express();
// var PORT = 3000;
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  