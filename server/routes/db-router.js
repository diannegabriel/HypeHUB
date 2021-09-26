const express = require("express");
const router = express.Router();
//Possibly not needed?
const request = require("request");
require("dotenv").config({ path: "../.env" });

//Import db helper functions
const dbReadUser = require(".././dbHelpers/users/dbReadUser");


//create nessisary routes for db query here

router.get("/db-user", (req, res) => {
  let userId = null;
  dbReadUser("billy@jo.com", "password")
    .then((info) => {
      userId = info;
      console.log(`----\n${info}\n---`);
    })
    .then(() => {
      res.json({ userId });
    });
});

router.get("/db-goals", (req, res) => {
  let goals = null;

  //Make DB call here
  // .then(() => {
  //   res.json({ goals })
  // });
})

module.exports = router;
