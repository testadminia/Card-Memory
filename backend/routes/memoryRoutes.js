const express = require("express");
const {
  saveGameData,
  fetchGameData,
} = require("../controllers/memoryController");
const router = express.Router();

// Route to save game data
router.post("/save", saveGameData);

// Route to fetch game data
router.get("/fetch", fetchGameData);

module.exports = router;
