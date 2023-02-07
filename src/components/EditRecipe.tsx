import { useEffect, useState } from "react";
import { fetchRecipe, modifyRecipe } from "../api-client";
import { useParams } from "react-router";
import CancelButton from "./CanceButton";

function EditRecipe() {
  const { recipeId } = useParams();
  const [recipeInput, setRecipeInput] = useState({
    name: "",
    instructions: "",
  });

  const handleEditRecipe = async (event) => {
    event.preventDefault();
    const value = event.target.value;

    setRecipeInput({
      ...recipeInput,
      [event.target.name]: value,
    });

    await modifyRecipe({
      recipeId: recipeId,
      newRecipeName: recipeInput.name,
      newInstructions: recipeInput.instructions,
    });
  };

  useEffect(() => {
    fetchRecipe(recipeId).then((recipe) => {
      setRecipeInput({
        name: recipe.name,
        instructions: recipe.instructions,
      });
    });
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setRecipeInput({
      ...recipeInput,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleEditRecipe}>
        <label>
          Nombre de el Platillo:
          <input
            name="name"
            type="text"
            value={recipeInput.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Instrucciones:
          <br />
          <textarea
            name="instructions"
            value={recipeInput.instructions}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <CancelButton navigateBack={true} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default EditRecipe;
