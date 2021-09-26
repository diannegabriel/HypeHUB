const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const PORT = 5000;
const app = express();
app.use(morgan("dev"));
const cors = require("cors");

//remove after testing
// const dbReadUser = require("./dbHelpers/users/dbReadUser");


//Gloria -> can/should this route be removed or relocated?
app.get("/", (req, res) => {
  res.json({ message: "Spotify-API Playground" });
});

//Import all routes from sub directories
const spotifyRoutes = require("./routes/spotify-router");
const dbRoutes = require("./routes/db-router");

app.use("/auth", spotifyRoutes);
app.use("/db", dbRoutes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Spotify-API app listeining on port ${PORT}`);
});
