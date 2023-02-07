import Nav from "./Nav";
import RecipeList from "./RecipeList";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

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

  const handleDeleteRecipe = async (event) => {
    event.preventDefault();
    // return <Toast />;
    // await deleteRecipe({
    //   recipeId: recipeParams.recipeId
    // });
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
        onDeleteRecipeClick={handleDeleteRecipe}
      />
      <Toast/>
    </>
  );
}

export default Recipes;
