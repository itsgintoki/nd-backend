const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    ingredients: [String],
    macros: {
        calories: Number,
        protein: Number,
        carbs: Number,
        fats: Number
    },
    scannedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Food", foodSchema);
