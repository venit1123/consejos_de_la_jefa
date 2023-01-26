// Server entry point
import express from "express";
import config from "./config";
import recipeRouter from "./recipeRoutes";

const server = express();

server.set("view engine", "ejs"); // tells express to use EJS as template language

server.use(express.static("dist")); //use() is a function to add a middleware (layer). This line tells express to serve any static assets undet dist directory

server.use("/api", recipeRouter);

// to serve the root path
server.use("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading...",
  });
});

server.listen(Number(config.PORT), config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
  );
});
