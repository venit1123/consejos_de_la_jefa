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

  const handleCreateNewRecipe = (event) => {
    event.preventDefault();
    navigate(`/recipes/new-recipe`);
  };

  return (
    <>
      <Nav />
      <h1>Recipe</h1>
      <button onClick={handleCreateNewRecipe}>
        Crear Nueva Receta
      </button>
      <RecipeList
        onViewRecipeClick={navigateToRecipeInstructions}
        onEditRecipeClick={navigateToEditRecipe}
      />
    </>
  );
}

export default Recipes;
