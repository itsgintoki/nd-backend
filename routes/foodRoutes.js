const express = require("express");
const { saveFood, getFoodByName } = require("../controllers/foodController");
const router = express.Router();

router.post("/save-food", saveFood);
router.get("/food/:name", getFoodByName);

module.exports = router;
