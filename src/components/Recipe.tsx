import { useEffect, useState } from "react";
import { fetchRecipe } from "../api-client";

function Recipe({ id, initialRecipeData }) {
  const [recipe, setRecipe] = useState(initialRecipeData);

  useEffect(() => {
    fetchRecipe(id).then((recipe) => {
      setRecipe(recipe);
    });
  }, [id]);
  return (
    <>
      <h5>{recipe.name}</h5>
      <p>{recipe.instructions}</p>
    </>
  );
}

export default Recipe;
