// Server entry point

import express from "express";
import config from "./config";

const server = express();

server.use(express.static("dist")); //use() is a function to add a middleware (layer). This line tells express to serve any static assets undet dist directory

server.set("view engine", "ejs"); // tells express to use EJS as template language

// to serve the root path
server.use("/", (req, res) => {
  res.render("index", {
    content: "EJS IS <em>COOL<em>",
  });
});

server.listen(Number(config.PORT), config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
  );
});
