const express = require("express");
const router = express.Router();
const request = require("request");
require("dotenv").config({ path: "../.env" });

// router.get("/callback", (req, res) => {
//   let code = req.query.code;

//   res.redirect("/");
// });

//create nessisary routes for db query here

app.get("/dbtest", (req, res) => {
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
