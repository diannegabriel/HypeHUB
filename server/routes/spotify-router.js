// const { request } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config({ path: "../.env" });

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const generateRandomString = (length) => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// Create the api object with the credentials

const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
  ],
  redirectUri = "http://localhost:5000/auth/callback",
  state = generateRandomString(16);

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: client_id,
  clientSecret: client_secret,
});
const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
// console.log(authorizeURL);

//authorize user with scopes
router.get("/login", (req, res) => {
  res.redirect(authorizeURL);
});

// Retrieve spotify access + refresh tokens
router.get("/auth/callback", (req, res) => {
  spotifyApi
    .authorizationCodeGrant(req.query.code)
    .then((data) => {
      console.log("The access token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body.access_token);
      spotifyApi.setRefreshToken(data.body.refresh_token);
      //redirect to react app
      res.redirect(process.env.FRONTEND_URI);
    })
    .catch((err) => console.log("spotifyApi - Authorization error", err));
});

router.get("/auth/token", (req, res) => {
  res.json({
    access_token: spotifyApi.getAccessToken(),
    refresh_token: spotifyApi.getRefreshToken(),
  });
});
//get userData
router.get("/me", (req, res) => {
  spotifyApi.getMe().then((data) => res.json(data));
});

router.get("/currently-playing", (req, res) => {
  spotifyApi.getMyCurrentPlayingTrack().then((data) => {
    res.json(data.body);
  });
});

router.get("/transfer-playback", (req, res) => {
  spotifyApi.getMyDevices().then((data) => {
    let availableDevices = data.body.devices;
    console.log("Devices>>>>", availableDevices);
  });
});
router.get("/genre-seeds", (req, res) => {
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

router.get("/chill", (req, res) => {
  //do a call to get user's top 50 tracks, - store that in an object/var
  spotifyApi.getMyTopTracks;
  spotifyApi
    .getRecommendations({
      min_energy: 0.4,
      seed_genres: ["chill", "acoustic", "classical", "jazz"],
      //seed_tracks:
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
