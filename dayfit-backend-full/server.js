const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chatRoutes = require("./routes/chat");
const path = require("path");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "../fit/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../fit/build/index.html"))
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port", process.env.PORT);
});