import express from "express";
import cors from "cors";
import { connectClient } from "./db";
import { parsePath } from "react-router-dom";

const router = express.Router();
router.use(cors());

router.get("/recipes", async (req, res) => {
  const client = await connectClient();
  const recipes = await client
    .collection("recipies")
    .find()
    .project({
      //project helps to get only specified info from the api, instead of getting all the data
      author: 1,
      description: 1,
      name: 1,
      id: 1,
      _id: 0,
    })
    .toArray();
  res.send({ recipes });
});

router.get("/recipe/:recipeId", async (req, res) => {
  const client = await connectClient();
  const recipe = await client
    .collection("recipies")
    .findOne({ id: req.params.recipeId });
  res.send({ recipe });
});

export default router;

/* Note: A middleware is an express function that access the request 
    and response objects and acts on them 
*/
