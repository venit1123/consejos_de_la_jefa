import { useEffect, useState } from "react";
import { fetchRecipe } from "../api-client";
import { useParams } from "react-router";
import Nav from "./UiNav";
import CancelButton from "./CanceButton";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function RecipeInstructions() {
  const { recipeId } = useParams();
  const [recipeName, setRecipeName] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();

  useEffect(() => {
    fetchRecipe(recipeId).then((recipe) => {
      setRecipeName(recipe.name);
      setRecipeInstructions(recipe.instructions);
    });
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <CancelButton buttonName="Back" navigateBack={true} />
        <h5>{recipeName}</h5>
        <p>{recipeInstructions}</p>
      </Container>
    </>
  );
}

export default RecipeInstructions;
