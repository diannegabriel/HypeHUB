// const { request } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config({ path: "../.env" });

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

// Create the api object with the credentials

const scopes = ["streaming", "user-read-email", "user-read-private"],
  redirectUri = "http://localhost:5000/auth/callback",
  state = generateRandomString(16);

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: client_id,
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

module.exports = router;
