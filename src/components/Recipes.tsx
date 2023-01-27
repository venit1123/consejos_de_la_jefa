import Nav from "./Nav";
import axios from "axios";
import { API_SERVER_URL } from "../public-config";
import { useEffect, useState } from "react";
import Card from "../Card";

function Recipes({ initialRecipies }) {
  const [recipies, setRecipies] = useState(initialRecipies);

  useEffect(() => {
    axios.get(`${API_SERVER_URL}/recipes`).then((resp) => {
      setRecipies(resp.data.recipies);
    });
  }, []);

  return (
    <>
      <Nav />
      <h1>Recipe</h1>
      <div className="container">
        <div className="row">
          {recipies.map((recipe) => {
            return (
              <div key={recipe.name} className="col-sm p-3">
                <Card
                  title={recipe.name}
                  subtitle={recipe.author}
                  description={recipe.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Recipes;
