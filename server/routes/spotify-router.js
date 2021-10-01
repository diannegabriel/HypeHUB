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
    "user-top-read",
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
  console.log(req.body);
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
  spotifyApi
    .getMyDevices()
    .then((data) => {
      let availableDevices = data.body.devices;
      const hypeHubApp = availableDevices.find(
        (device) => device.name === "HypeHUB - BattleTheme"
      );
      const deviceIds = [hypeHubApp.id];
      return deviceIds;
    })
    .then((device) => {
      console.log(device);
      spotifyApi.transferMyPlayback(device).then(() => {
        console.log("Transfering playback to HypeHubApp on device id:", device);
        res.sendStatus(200);
      });
    })
    .catch((err) => res.json({ err }));
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

router.get("/recs/learn", (req, res) => {
  // GENERATE RECOMMENDATIONS FOR KNOWLEDGE THEME
  //do a call to get user's top 50 tracks, - store that in an object/var and sort that and pick 1-3 seed tracks to feed into recommendations? Lol i ended up doing this...
  /* Audio features for knowledge:
   * Energy: low-mid  * Acousticness: max 0.45   * Valence: max 0.45  * Instrumentalness: min 0.55  */
  spotifyApi
    .getMyTopTracks()
    .then((data) => {
      //store response object in topTracks...
      let topTracks = data.body.items;
      const topTracksArr = [];
      // retrieve id for topTracks, store in topTracksArr
      topTracks.map((track) => {
        topTracksArr.push(track.id);
      });
      //get 4 seed tracks randomly from topTracks...
      const fourTracks = [];
      for (let i = 0; i < 4; i++) {
        let randomNum = Math.floor(Math.random() * topTracksArr.length - 1);
        fourTracks.push(topTracksArr[randomNum]);
      }
      return fourTracks;
    })
    .then((seedTracks) => {
      // use users seedTracks as data for recommendations. Parameters can be tweaked to increase specificity for theme...
      spotifyApi
        .getRecommendations({
          limit: 10,
          seed_tracks: seedTracks.join(","),
          max_energy: 0.45,
          min_instrumentalness: 0.55,
          max_acousticness: 0.45,
          max_valence: 0.45,
        })
        .then((data) => {
          let recommendations = data.body;
          res.json({ recommendations });
        });
    })
    .catch((err) => console.log("❌ Error getting reccomendations ❌", err));
});

router.get("/recs/heal", (req, res) => {
  /*GENERATE RECOMMENDATIONS FOR VITALITY THEME
   * Acousticness, valence(low-mid), Energy (mid), Danceability(mid), instrumentalness (low-mid)
   */
  spotifyApi
    .getMyTopTracks()
    .then((data) => {
      //store response object in topTracks...
      let topTracks = data.body.items;
      const topTracksArr = [];
      // retrieve id for topTracks, store in topTracksArr
      topTracks.map((track) => {
        topTracksArr.push(track.id);
      });
      //get 4 seed tracks randomly from topTracks...
      const fourTracks = [];
      for (let i = 0; i < 4; i++) {
        let randomNum = Math.floor(Math.random() * topTracksArr.length - 1);
        fourTracks.push(topTracksArr[randomNum]);
      }
      return fourTracks;
    })
    .then((seedTracks) => {
      // use users seedTracks as data for recommendations. Parameters can be tweaked to increase specificity for theme...
      spotifyApi
        .getRecommendations({
          limit: 10,
          seed_tracks: seedTracks.join(","),
          max_energy: 0.45,
          max_danceability: 0.65,
          min_acousticness: 0.35,
          max_acousticness: 0.7,
          max_valence: 0.65,
        })
        .then((data) => {
          let recommendations = data.body;
          res.json({ recommendations });
        });
    })
    .catch((err) => console.log("❌ Error getting reccomendations ❌", err));
});
router.get("/recs/hype", (req, res) => {
  /*GENERATE RECOMMENDATIONS FOR STRENGTH THEME
   * Audio features to target:
   * Loudness (mid-high), Energy (mid-high), valence(low-mid), Danceability (mid), loudness(mid-high)
   */
});
router.get("/recs/party", (req, res) => {
  /*GENERATE RECOMMENDATIONS FOR SOCIAL THEME
   * Audio features to target:
   * Valence (mid-high --feelgood), Danceability (high) //not sure how this works tho...Popularity (min 50 want known bops), Energy (mid-high)
   */
});
router.get("/recs/letsgoo", (req, res) => {
  /*GENERATE RECOMMENDATIONS FOR WILLPOWER THEME
   * Audio features to target:
   * Valence (mid-high --positive), Energy (mid), Danceability (mid-high)
   */
});

module.exports = router;
