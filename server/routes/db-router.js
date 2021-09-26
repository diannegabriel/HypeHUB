const express = require("express");
const router = express.Router();
const request = require("request");
require("dotenv").config({ path: "../.env" });

//review spotify router file 
//create nessisary routes for db query here

// app.get("/dbtest", (req, res) => {
//   let userId = null;
//   dbReadUser("billy@jo.com", "password")
//     .then((info) => {
//       userId = info;
//       console.log(`----\n${info}\n---`);
//     })
//     .then(() => {
//       res.json({ userId });
//     });
// });