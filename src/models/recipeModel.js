import mongoose from "mongoose";

const Schema = mongoose.Schema;

export default class RecipeSchema {
    constructor
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
}