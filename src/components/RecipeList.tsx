import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchRecipeList } from "../api-client";

function RecipeList({ onViewRecipeClick, onEditRecipeClick }) {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    fetchRecipeList().then((recipies) => {
      setRecipies(recipies);
    });
  }, []);

  return (
    <>
      <h3>Recipe List</h3>
      <div className="container">
        <div className="row">
          {recipies.map((recipe) => {
            return (
              <div key={recipe.name} className="col-sm p-3">
                <Card
                  title={recipe.name}
                  subtitle={recipe.author}
                  description={recipe.description}
                  handleLeftCardButton={onViewRecipeClick}
                  leftClickParams={{ recipeId: recipe.id }}
                  handleRightCardButton={onEditRecipeClick}
                  rightClickParams={{ recipeId: recipe.id }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RecipeList;
