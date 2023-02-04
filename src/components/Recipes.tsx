import { useEffect, useState } from "react";
import Nav from "./Nav";
import RecipeInstructions from "./RecipeInstructions";
import RecipeList from "./RecipeList";
import { useNavigate } from "react-router-dom";

function Recipes({ initialRecipies }) {
  const [page, setPage] = useState("recipeList");
  const [recipeId, setRecipeId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.recipeId
        ? "recipeList"
        : "recipe";
      setPage(newPage);
      setRecipeId(event.state?.recipeId);
    };
  }, []);

  const navigateToRecipe = (recipeId) => {
    window.history.pushState({ recipeId }, "");
    setPage("recipe");
    setRecipeId(recipeId);
    navigate(`/recipes/${recipeId}`);
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
        return <RecipeInstructions />;
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
