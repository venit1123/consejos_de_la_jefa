import { useEffect, useState } from "react";
import { fetchRecipe } from "../api-client";
import { useParams } from "react-router";
import Nav from "./Nav";

function RecipeInstructions() {
  const { recipeId } = useParams();
  const [recipeName, setRecipeName] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();

  useEffect(() => {
    fetchRecipe(recipeId).then((recipe) => {
      setRecipeName(recipe.name);
      setRecipeInstructions(recipe.instructions);
    });
  }, []);

  return (
    <>
      <Nav />
      <h1>Recipe Instructions</h1>
      <h5>{recipeName}</h5>
      <p>{recipeInstructions}</p>
    </>
  );
}

export default RecipeInstructions;
