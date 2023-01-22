import { getRecipes,
        addNewRecipe,
        getRecipeWithId, 
        updateRecipe, 
        deleteRecipe } from "../controllers/recipeController";

const routes = (app) => {
    app.route('/recipe')
    //get all recipes
    .get((req, res,  next) => {
        console.log(`HERE: ${req.originalUrl}`)
        console.log(`HERE2: ${req.method}`)
        next();
    }, getRecipes)

    // post new Recipe
    .post(addNewRecipe);

    app.route('/recipe/:recipeId')
    
    // get specific recipe
    .get(getRecipeWithId)
    
    // update recipe
    .put(updateRecipe)

    //delete recipe
    .delete(deleteRecipe)
}

export default routes

/* Note: A middleware is an express function that access the request 
    and response objects and acts on them 
*/