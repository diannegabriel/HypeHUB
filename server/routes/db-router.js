const express = require("express");
const router = express.Router();
//Possibly not needed?
const request = require("request");
require("dotenv").config({ path: "../.env" });

//Import db helper functions
const dbReadUser = require(".././dbHelpers/users/dbReadUser");


// router.get("/callback", (req, res) => {
//   let code = req.query.code;

//   res.redirect("/");
// });

//create nessisary routes for db query here

router.get("/dbtest", (req, res) => {
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

module.exports = router;
