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
  newInstructions,
}) => {
  const resp = await axios.post(
    `${API_SERVER_URL}/recipe/edit/${recipeId}`,
    { newRecipeName, newInstructions },
  );
  return resp.data.updatedRecipe;
};
