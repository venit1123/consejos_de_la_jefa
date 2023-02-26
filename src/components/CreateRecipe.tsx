import Nav from "./Nav";
import { useState } from "react";
import CancelButton from "./CanceButton";
import { createNewRecipe } from "../api-client";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
  const [newRecipeInput, setNewRecipeInput] = useState({
    name: "",
    author: "",
    description: "",
    categoryName: "",
    feedCount: "",
    // ingredients: "",
    instructions: "",
  });

  const navigate = useNavigate();

  const handleCreateNewRecipe = async (event) => {
    event.preventDefault();
    const value = event.target.value;

    setNewRecipeInput({
      ...newRecipeInput,
      [event.target.name]: value,
    });

    await createNewRecipe({
      name: newRecipeInput.name,
      author: newRecipeInput.author,
      description: newRecipeInput.description,
      categoryName: newRecipeInput.categoryName,
      feedCount: newRecipeInput.feedCount,
      // ingredients: newRecipeInput.ingredients,
      instructions: newRecipeInput.instructions,
    });

    navigate(`/recipes`);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNewRecipeInput({
      ...newRecipeInput,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <Nav />
      <h1>Create Recipe</h1>
      <form onSubmit={handleCreateNewRecipe}>
        <label>
          Nombre de el Platillo:
          <input
            name="name"
            type="text"
            value={newRecipeInput.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Autor:
          <input
            name="author"
            type="text"
            value={newRecipeInput.author}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Short Description:
          <input
            name="description"
            type="text"
            value={newRecipeInput.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Categoria:
          <input
            name="categoryName"
            type="text"
            value={newRecipeInput.categoryName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Numero de Personas:
          <input
            name="feedCount"
            type="text"
            value={newRecipeInput.feedCount}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* <label>
          Ingredientes:
          <input
            name="ingredients"
            type="text"
            value={newRecipeInput.ingredients}
            // onChange={handleInputChange}
          />
        </label>
        <br /> */}
        <label>
          Instrucciones:
          <br />
          <textarea
            name="instructions"
            value={newRecipeInput.instructions}
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

export default CreateRecipe;
