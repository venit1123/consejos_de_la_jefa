import { useEffect, useState } from "react";
import { fetchRecipe, modifyRecipe } from "../api-client";
import { useParams } from "react-router";
import CancelButton from "./CanceButton";
import {
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";

function EditRecipe() {
  const { recipeId } = useParams();
  const [recipeInput, setRecipeInput] = useState({
    name: "",
    author: "",
    instructions: "",
    description: "",
    feedCount: "",
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
      newDescription: recipeInput.description,
      newAuthor: recipeInput.author,
      newFeedCount: recipeInput.feedCount,
    });
  };

  useEffect(() => {
    fetchRecipe(recipeId).then((recipe) => {
      setRecipeInput({
        name: recipe.name,
        instructions: recipe.instructions,
        description: recipe.description,
        author: recipe.author,
        feedCount: recipe.feedCount,
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
      <Container>
        <Row>
          <Col>
            <CancelButton
              buttonName="Back"
              navigateBack={true}
            />
          </Col>
          <Col>
            <h1>Modify Recipe</h1>
          </Col>
        </Row>
        <Form onSubmit={handleEditRecipe}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Recipe Name*</Form.Label>
                <Form.Control
                  required
                  name="name"
                  type="text"
                  value={recipeInput.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Author*</Form.Label>
                <Form.Control
                  required
                  name="author"
                  type="text"
                  value={recipeInput.author}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              name="shortDescription"
              type="text"
              placeholder="Lets cook something delicious"
              value={recipeInput.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Categoria*</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="appetizer">Appetizer</option>
                  <option value="entree">Entree</option>
                  <option value="dessert">Dessert</option>
                  <option value="misc">Misc</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Feeds</Form.Label>
                <Form.Control
                  name="feedCount"
                  type="number"
                  placeholder="4"
                  min={1}
                  max={50}
                  value={recipeInput.feedCount}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Instruccions*</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              name="instructions"
              value={recipeInput.instructions}
              onChange={handleInputChange}
            />
          </Form.Group>
          <CancelButton navigateBack={true} />
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    </>
  );
}

export default EditRecipe;
