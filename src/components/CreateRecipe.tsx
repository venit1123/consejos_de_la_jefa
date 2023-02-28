import UiNav from "./UiNav";
import { useState } from "react";
import CancelButton from "./CanceButton";
import { createNewRecipe } from "../api-client";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";

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
      <UiNav />
      <Container>
        <h1>New Recipe</h1>
        <Form onSubmit={handleCreateNewRecipe}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Recipe Name*</Form.Label>
                <Form.Control
                  required
                  name="name"
                  type="text"
                  placeholder="Recipe Name"
                  value={newRecipeInput.name}
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
                  placeholder="Author"
                  value={newRecipeInput.author}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Lets cook something delicious"
              value={newRecipeInput.description}
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
                  value={newRecipeInput.feedCount}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
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
          <Form.Group className="mb-3">
            <Form.Label>Instruccions*</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              name="instructions"
              value={newRecipeInput.instructions}
              onChange={handleInputChange}
            />
          </Form.Group>
          <CancelButton navigateBack={true} />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateRecipe;
