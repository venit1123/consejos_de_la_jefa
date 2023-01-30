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
