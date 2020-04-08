const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
