import Nav from "./Nav";
import axios from "axios";
import { API_SERVER_URL } from "../public-config";
import { useEffect, useState } from "react";

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
      {recipies.map((recipe) => {
        return <h1>{recipe.name}</h1>;
      })}
    </>
  );
}

export default Recipes;
