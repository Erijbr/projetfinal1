
const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({

    nom: { type: String, required: true },
    quantiteStock: { type: Number, required: true },
    unité: { type: String, required: true },})
    

module.exports = mongoose.model('Ingredient', ingredientsSchema);
