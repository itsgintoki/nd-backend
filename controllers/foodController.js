const Food = require("../models/Food");

// Save food data
exports.saveFood = async (req, res) => {
    try {
        const food = new Food(req.body);
        await food.save();
        res.status(201).json({ message: "✅ Food saved successfully", food });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get food data by name
exports.getFoodByName = async (req, res) => {
    try {
        const food = await Food.findOne({ name: req.params.name });
        if (!food) return res.status(404).json({ message: "❌ Food not found" });
        res.json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
