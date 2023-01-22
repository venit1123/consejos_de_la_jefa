import mongoose from "mongoose";
import { RecipeSchema } from "../models/recipeModel";

const Recipe = mongoose.model("Recipe", RecipeSchema);

export const addNewRecipe = (req, res) => {
    let newRecipe = new Recipe(req.body);

    newRecipe.save((err, recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(recipe);
    });
};

export const getRecipes = (req, res) => {
    Recipe.find({}, (err, recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(recipe);
    });
};

export const getRecipeWithId = (req, res) => {
    Recipe.findById(req.params.recipeId, (err, recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(recipe);
    });
};

export const updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true,},  (err, recipe) => { // when user sends a JSON response they are going to show the new info (updated version) (like wise 'new: false' will show the old (not updated) version)
        if (err) {
            res.send(err);
        }
        res.json(recipe);
    });
};

export const deleteRecipe = (req, res) => {
    Recipe.remove({ _id: req.params.recipeId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted contact"});
    });
};