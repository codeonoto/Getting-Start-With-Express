const express = require("express");

// server
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to express");
});

server.use(express.static("public"))


server.listen(3300)
console.log("Server is listening on 3300")
