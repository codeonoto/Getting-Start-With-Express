const express = require("express");

// Create a server

const server = express();

// Handle Defualt request

// 1st Middleware
function firstMiddleware(req, res, next) {
  console.log("This is first middleware");
  next();
}
function secondMiddleware(req, res, next) {
  console.log("This is second middleware");
  next();
}

function globalMiddleware(req, res, next) {
  console.log("This is global middleware");
  next();
}

// this is going to be executed for all requests
server.use(globalMiddleware);

// GET request
// route-level middle going to be executed for the send request
server.get("/", [firstMiddleware, secondMiddleware], (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("Welcome to Express Server");
});

// POST request
server.post("/", (req, res) => {
  res.status(201).send("Post request received");
});

// PUT request
server.put("/", (req, res) => {
  res.send("Put request received");
});

// DELETE request
server.delete("/", (req, res) => {
  res.send("Delete request received");
});

// Listen on specified port
server.listen(3100, () => {
  console.log("Server is listening on 3100");
});
