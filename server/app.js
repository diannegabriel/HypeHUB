const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = 5000;
const app = express();
app.use(cors());
app.use(morgan("dev"));

//remove after testing
// const dbReadUser = require("./dbHelpers/users/dbReadUser");

//Import all routes from sub directories
const spotifyRoutes = require("./routes/spotify-router");
const dbRoutes = require("./routes/db-router");

app.use("/", spotifyRoutes);
app.use("/db", dbRoutes);

app.listen(PORT, () => {
  console.log(`Spotify-API app listening on port ${PORT}`);
});
