import UiNav from "./UiNav";
import RecipeList from "./RecipeList";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

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
      <UiNav />
      <Container>
        <h1 className="title">
          Recetas de{" "}
          <span className="cursive-title">Marina</span>
        </h1>
        <RecipeList
          onViewRecipeClick={navigateToRecipeInstructions}
          onEditRecipeClick={navigateToEditRecipe}
        />
        <Button onClick={handleCreateNewRecipe}>
          New Recipe
        </Button>
      </Container>
    </>
  );
}

export default Recipes;
