const Save = require("../models/save");

exports.saveGameData = async (req, res) => {
  const { userID, gameDate, failed, difficulty, completed, timeTaken } =
    req.body;

  console.log("Received data to save:", req.body);

  try {
    if (
      !userID ||
      !gameDate ||
      difficulty === undefined ||
      completed === undefined ||
      timeTaken === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newSave = new Save({
      userID,
      gameDate,
      failed,
      difficulty,
      completed,
      timeTaken,
    });

    await newSave.save();
    return res.status(201).json({ message: "Game data saved successfully" });
  } catch (error) {
    console.error("Error saving game data:", error);
    return res.status(500).json({ message: "Error saving game data", error });
  }
};

exports.fetchGameData = async (req, res) => {
  try {
    const { userID } = req.params;
    const gameData = await Save.find({ userID });

    if (!gameData || !gameData.length) {
      return res.status(400).json({ message: "Game data not found." });
    }

    return res.status(200).json({ gameData });
  } catch (error) {
    console.error("Error fetching game data: ", error);
    return res
      .status(500)
      .json({ message: "Error fetching game data: ", error });
  }
};
