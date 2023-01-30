import { useState } from "react";
import Nav from "./Nav";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

function Recipes({ initialRecipies }) {
  const [page, setPage] = useState("recipeList");
  const [recipeId, setRecipeId] = useState();

  const navigateToRecipe = (recipeId) => {
    setPage("recipe");
    setRecipeId(recipeId);
  };

  const pageContent = () => {
    switch (page) {
      case "recipeList":
        return (
          <RecipeList
            initialRecipies={initialRecipies}
            onRecipeClick={navigateToRecipe}
          />
        );
      case "recipe":
        return <Recipe id={recipeId} initialRecipeData={[]}/>;
    }
  };

  return (
    <>
      <Nav />
      <h1>Recipe</h1>
      {pageContent()}
    </>
  );
}

export default Recipes;
