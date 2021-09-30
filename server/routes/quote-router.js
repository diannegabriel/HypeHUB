const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  const getRegQuote = () => {
    axios.get("https://zenquotes.io/api/random").then((response) => {
      let rawData = response.data;
      let quote = rawData.find((q) => q);
      // console.log(quote);
      res.json({ quote });
    });
  };

  const getTrollQuote = () => {
    axios.get("https://api.kanye.rest").then((response) => {
      // console.log(response.data);
      let quote = response.data;
      res.json({ quote });
    });
  };

  //generate random number between 1 and 5
  let randomNum = Math.floor(Math.random() * 5);

  if (randomNum > 2) {
    console.log(randomNum);
    getTrollQuote();
  } else {
    console.log(randomNum);
    getRegQuote();
  }
});

module.exports = router;

// I want to randomlye call an API depending on a random number...
