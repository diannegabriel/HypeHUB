const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const PORT = 5000;
const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Spotify-API Playground" });
});

const spotifyRoutes = require("./routes/spotify-router");
app.use("/auth", spotifyRoutes);

app.listen(PORT, () => {
  console.log(`Spotify-API app listeining on port ${PORT}`);
});
