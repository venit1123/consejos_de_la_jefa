import { useEffect, useState } from "react";
import UICard from "./UICard";
import { fetchRecipeList } from "../api-client";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteRecipe } from "../api-client";

function RecipeList({ onViewRecipeClick, onEditRecipeClick }) {
  const [recipies, setRecipes] = useState([]);

  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    id: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchRecipes = fetchRecipeList().then((recipies) => {
    setRecipes(recipies);
  });

  useEffect(() => {
    fetchRecipes;
  }, []);

  const handleDeleteRecipe = (recipeParams) => {
    setRecipeInfo({
      name: recipeParams.recipeName,
      id: recipeParams.recipeId,
    });
    handleShow();
  };

  const handleConfirmDeleteRecipe = () => {
    deleteRecipe({ recipeId: recipeInfo.id });
    handleClose();
    fetchRecipes;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {recipies.map((recipe) => {
            return (
              <div key={recipe.name} className="col-sm p-3">
                <UICard
                  title={recipe.name}
                  subtitle={recipe.author}
                  description={recipe.description}
                  handleLeftCardButton={onViewRecipeClick}
                  leftClickParams={{ recipeId: recipe.id }}
                  handleRightCardButton={onEditRecipeClick}
                  rightClickParams={{ recipeId: recipe.id }}
                  handleCloseCardButton={handleDeleteRecipe}
                  closeCardClickParams={{
                    recipeId: recipe.id,
                    recipeName: recipe.name,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {recipeInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {recipeInfo.name}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleConfirmDeleteRecipe}
          >
            Confirm
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecipeList;
