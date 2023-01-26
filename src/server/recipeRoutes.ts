import express from "express";
import cors from "cors";

const recipeRouter = express.Router();
recipeRouter.use(cors());

import testData from "../../test-data.json";

recipeRouter.get("/recipes", (req, res) => {
  //get data from MongoDB
  res.send({ recipies: testData });
});

export default recipeRouter;

/* Note: A middleware is an express function that access the request 
    and response objects and acts on them 
*/
