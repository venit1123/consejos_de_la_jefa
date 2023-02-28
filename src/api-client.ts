import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchRecipeList = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/recipes`);
  return resp.data.recipes;
};

export const fetchRecipe = async (recipeId) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/recipe/${recipeId}`,
  );
  return resp.data.recipe;
};

export const modifyRecipe = async ({
  recipeId,
  newRecipeName,
  newAuthor,
  newInstructions,
  newDescription,
  newFeedCount,
}) => {
  const resp = await axios.post(
    `${API_SERVER_URL}/recipe/edit/${recipeId}`,
    {
      newRecipeName,
      newAuthor,
      newInstructions,
      newDescription,
      newFeedCount,
    },
  );
  return resp.data.updatedRecipe;
};

export const createNewRecipe = async ({
  name,
  author,
  description,
  categoryName,
  feedCount,
  // ingredients,
  instructions,
}) => {
  const resp = await axios.put(
    `${API_SERVER_URL}/recipes/new-recipe`,
    {
      name,
      author,
      description,
      categoryName,
      feedCount,
      // ingredients,
      instructions,
    },
  );
  return resp.data.newRecipe;
};

export const deleteRecipe = async ({ recipeId }) => {
  const resp = await axios.delete(
    `${API_SERVER_URL}/recipe/delete/${recipeId}`,
  );
  return resp.data.recipes;
};
