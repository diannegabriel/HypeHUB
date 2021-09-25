// const { request } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config({ path: "../.env" });

const generateRandomString = (length) => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
// /auth routes
// router.get("/login", (req, res) => {
//   const scope = "streaming \
//   user-read-email \
//   user-read-private";
//   const state = generateRandomString(16);

//   const auth_query_params = new URLSearchParams({
//     response_type: "code",
//     client_id: client_id,
//     scope: scope,
//     redirect_uri: "http://localhost:5000/auth/callback",
//     state: state,
//   });

//   res.redirect(
//     "https://accounts.spotify.com/authorize/?" + auth_query_params.toString()
//   );
// });

// router.get("/callback", (req, res) => {
//   let code = req.query.code;

//   const authOptions = {
//     url: "https://accounts.spotify.com/api/token",
//     form: {
//       code: code,
//       redirect_uri: "http://localhost:3000/auth/callback",
//       grant_type: "authorization_code",
//     },
//     headers: {
//       Authorization:
//         "Basic " +
//         Buffer.from(client_id + ":" + client_secret).toString("base64"),
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     json: true,
//   };

//   request.post(authOptions, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var access_token = body.access_token;
//       res.redirect("/");
//       console.log("access token", access_token);
//       // res.json({ access_token });
//     }
//   });
// });

// router.get("/token", (req, res) => {
//   res.json({
//     access_token: access_token,
//   });
// });

// Create the api object with the credentials

const scopes = ["streaming", "user-read-email", "user-read-private"],
  redirectUri = "http://localhost:5000/auth/callback",
  state = generateRandomString(16);
const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: client_id,
});

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
// Retrieve an access token.
// spotifyApi.clientCredentialsGrant().then(
//   (data) => {
//     console.log("The access token expires in " + data.body["expires_in"]);
//     console.log("The access token is " + data.body["access_token"]);

//     // Save the access token so that it's used in future calls
//     spotifyApi.setAccessToken(data.body["access_token"]);
//   },
//   function (err) {
//     console.log("Something went wrong when retrieving an access token", err);
//   }
// );

// app.get("/genre-seeds", (req, res) => {
//   spotifyApi.getAvailableGenreSeeds().then(
//     function (data) {
//       let genreSeeds = data.body;
//       console.log(genreSeeds);
//       res.json(genreSeeds);
//     },
//     function (err) {
//       console.log("Something went wrong!", err);
//     }
//   );
// });

// app.get("/chill", (req, res) => {
//   spotifyApi
//     .getRecommendations({
//       min_energy: 0.4,
//       seed_genres: ["chill", "acoustic", "classical", "jazz"],
//       min_popularity: 50,
//       min_valence: 0.3,
//     })
//     .then(
//       function (data) {
//         let recommendations = data.body;
//         res.json(recommendations);
//       },
//       function (err) {
//         console.log("Something went wrong!", err);
//       }
//     );
// });

module.exports = router;
