// Server entry point

import express from "express";

const server = express();

server.use(express.static("dist")); //use() is a function to add a middleware (layer). This line tells express to serve any static assets undet dist directory

// to serve the root path
server.use("/", (req, res) => {
  res.send("Hello");
});

server.listen(8080, () => {
  console.info(
    "Express server is listening at https://localhost/8080 or https://0.0.0.0/8080 ",
  );
});
