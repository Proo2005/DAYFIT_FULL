const express = require("express");
const router = express.Router();
const { handleGeminiChat } = require("../controllers/chatController");

router.post("/", handleGeminiChat);

module.exports = router;