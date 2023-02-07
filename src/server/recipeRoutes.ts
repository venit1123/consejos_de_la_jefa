import express from "express";
import cors from "cors";
import { connectClient } from "./db";

const router = express.Router();
router.use(cors());
router.use(express.json());

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

router.post("/recipe/edit/:recipeId", async (req, res) => {
  const client = await connectClient();
  const { newRecipeName, newInstructions } = req.body;

  const doc = await client
    .collection("recipies")
    .findOneAndUpdate(
      { id: req.params.recipeId },
      {
        $set: {
          id: newRecipeName.toLowerCase().replace(/\s/g, "_"),
          name: newRecipeName,
          instructions: newInstructions,
          dateUpdated: new Date(),
        },
      },
      { returnDocument: "after" },
    );
  res.send({ updatedRecipe: doc.value });
});

router.put("/recipes/new-recipe", async (req, res) => {
  const client = await connectClient();
  const {
    name,
    author,
    description,
    categoryName,
    feedCount,
    // ingredients,
    instructions,
  } = req.body;
  const doc = await client.collection("recipies").insert({
    id: name.toLowerCase().replace(/\s/g, "_"),
    name,
    author,
    description,
    categoryName,
    feedCount,
    // ingredients,
    instructions,
    dateCreated: new Date(),
  });
  res.send({ newRecipe: doc.value });
});
export default router;

/* Note: A middleware is an express function that access the request 
    and response objects and acts on them 
*/
