import { useEffect, useState } from "react";
import { fetchRecipe } from "../api-client";
import { useParams } from "react-router";

function RecipeInstructions() {
  const { recipeId } = useParams();
  const [recipeName, setRecipeName] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();

  useEffect(() => {
    console.log(`helllo - ${recipeId}`);
    fetchRecipe(recipeId).then((recipe) => {
      setRecipeName(recipe.name);
      setRecipeInstructions(recipe.instructions);
    });
  }, [recipeId]);

  return (
    <>
      <h5>{recipeName}</h5>
      <p>{recipeInstructions}</p>
    </>
  );
}

export default RecipeInstructions;
