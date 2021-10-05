const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  const getRegQuote = () => {
    axios.get("https://zenquotes.io/api/random").then((response) => {
      let rawData = response.data;
      let quote = rawData.find((q) => q);
      res.json({ quote });
    });
  };

  const getTrollQuote = () => {
    axios.get("https://api.kanye.rest").then((response) => {
      let quote = response.data;
      res.json({ quote });
    });
  };

  //generate random number between 0 and 5
  let randomNum = Math.floor(Math.random() * 5);

  if (randomNum > 3) {
    getTrollQuote();
  } else {
    getRegQuote();
  }
});

module.exports = router;
