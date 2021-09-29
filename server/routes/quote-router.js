const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  console.log("quotes");
  axios.get("https://zenquotes.io/api/random").then((response) => {
    console.log(response.data);
    let quote = response.data;
    res.json({ quote });
  });
});

router.get("/kanye", (req, res) => {
  axios.get("https://api.kanye.rest").then((response) => {
    console.log(response.data);
    let kanyeQuote = response.data;
    res.json({ kanyeQuote });
  });
});
module.exports = router;

// I want to randomlye call an API
