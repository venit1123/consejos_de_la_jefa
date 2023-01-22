import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RecipeSchema = new Schema({
    title: {
        type: String,
        require: "Enter Recipe Name"
    },
    author: {
        type: String,
        require: "Enter Recipe Name"
    },
    type: {
        type: String,
    },
    created_date: {
       type: Date,
       default: Date.now
    }
});