import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchRecipeList } from "../api-client";

function RecipeList({ initialRecipies, onRecipeClick }) {
  const [recipies, setRecipies] = useState(initialRecipies);

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
                  handleLeftCardButton={onRecipeClick}
                  recipeId={recipe.id}
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
