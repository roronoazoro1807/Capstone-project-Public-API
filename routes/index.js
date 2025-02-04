import express from "express";
import axios from "axios";

const router = express.Router();

// Home Route
router.get("/", (req, res) => {
  const searchQuery = req.query.search || ""; // Default to an empty string if no search
  const level = req.query.level || "N5"; // Default to N5 if no level is selected
  res.render("index", { searchQuery, level });
});

// API Route for JLPT words by level with search
router.get("/words", async (req, res) => {
  try {
    const level = req.query.level || "N5"; // Default to N5 if no level is selected
    const searchQuery = req.query.search || ""; // Get the search query
    const levelNumber = level.charAt(1); // Extract level number (e.g., N5 -> 5)

    // Fetch words for the specific level from the API with a higher limit
    const response = await axios.get(
      `https://jlpt-vocab-api.vercel.app/api/words?level=${levelNumber}&limit=50`
    );

    // Filter words based on search query
    const filteredWords = response.data.words.filter(
      (word) =>
        word.word.includes(searchQuery) || word.meaning.includes(searchQuery)
    );

    console.log(
      `Filtered ${filteredWords.length} words for JLPT ${level} with search query: "${searchQuery}"`
    );

    // Render the words for the given level and search query
    res.render("words", { words: filteredWords, level, searchQuery });
  } catch (error) {
    console.error("Error fetching words:", error);
    res.status(500).send("Failed to fetch words.");
  }
});

export default router;
