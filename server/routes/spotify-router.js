// const { request } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");
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
let access_token = null;
// /auth routes
router.get("/login", (req, res) => {
  const scope = "streaming \
  user-read-email \
  user-read-private";
  const state = generateRandomString(16);

  const auth_query_params = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: "http://localhost:5000/auth/callback",
    state: state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" + auth_query_params.toString()
  );
});

router.get("/callback", (req, res) => {
  let code = req.query.code;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: "http://localhost:5000/auth/callback",
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      console.log("access token", access_token);
      // res.json({ access_token });
      res.redirect("/");
    }
  });
});

router.get("/token", (req, res) => {
  res.json({ access_token });
});

module.exports = router;
