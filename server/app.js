const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = 5000;
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(express.json());

//Import all routes from sub directories
const spotifyRoutes = require("./routes/spotify-router");
const dbRoutes = require("./routes/db-router");
const quoteRoutes = require("./routes/quote-router");

app.use("/", spotifyRoutes);
app.use("/db", dbRoutes);
app.use("/quote", quoteRoutes);

app.listen(PORT, () => {
  console.log(`Spotify-API app listening on port ${PORT}`);
});
