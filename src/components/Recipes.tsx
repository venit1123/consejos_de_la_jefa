import Nav from "./Nav";
import RecipeList from "./RecipeList";
import { useNavigate } from "react-router-dom";

function Recipes() {
  const navigate = useNavigate();

  const navigateToRecipeInstructions = (recipeParams) => {
    navigate(`/recipes/${recipeParams.recipeId}`);
  };

  const navigateToEditRecipe = (recipeParams) => {
    navigate(`/recipes/edit/${recipeParams.recipeId}`);
  };

  return (
    <>
      <Nav />
      <h1>Recipe</h1>
      <RecipeList
        onViewRecipeClick={navigateToRecipeInstructions}
        onEditRecipeClick={navigateToEditRecipe}
      />
    </>
  );
}

export default Recipes;
