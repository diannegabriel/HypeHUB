const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const SpotifyWebApi = require("spotify-web-api-node");
const PORT = 5000;
const app = express();
app.use(morgan("dev"));

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  (data) => {
    console.log("The access token expires in " + data.body["expires_in"]);
    console.log("The access token is " + data.body["access_token"]);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function (err) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);

app.get("/genre-seeds", (req, res) => {
  spotifyApi.getAvailableGenreSeeds().then(
    function (data) {
      let genreSeeds = data.body;
      console.log(genreSeeds);
      res.json(genreSeeds);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

app.get("/chill", (req, res) => {
  spotifyApi
    .getRecommendations({
      min_energy: 0.4,
      seed_genres: ["chill", "acoustic", "classical", "jazz"],
      min_popularity: 50,
      min_valence: 0.3,
    })
    .then(
      function (data) {
        let recommendations = data.body;
        res.json(recommendations);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
});

app.get("/", (req, res) => {
  res.json({ message: "Spotify-API Playground" });
});

app.listen(PORT, () => {
  console.log(`Spotify-API app listeining on port ${PORT}`);
});
