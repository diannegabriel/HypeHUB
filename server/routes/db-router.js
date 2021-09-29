const express = require("express");
const router = express.Router();
router.use(express.json());

require("dotenv").config({ path: "../.env" });

//Import db helper functions
const dbReadUser = require(".././dbHelpers/users/dbReadUser");

const dbReadGoals = require(".././dbHelpers/goals/dbReadGoals");
const dbCreateGoal = require("../dbHelpers/goals/dbCreateGoal");
const dbUpdateGoalStatus = require("../dbHelpers/goals/dbUpdateGoalStatus");
const dbUpdateGoal = require ("../dbHelpers/goals/dbUpdateGoal");

//create nessisary routes for db query here
router.get("/db-user", (req, res) => {
  let userId = null;
  dbReadUser("billy@jo.com", "password")
    .then((info) => {
      userId = info;
    })
    .then(() => {
      res.json({ userId });
    });
});

router.get("/daily-goals", (req, res) => {
  let goals = null;
  dbReadGoals("614de5c4646237d2b991f65c", "daily")
    .then((info) => {
      goals = info;
    })
    .then(() => {
      res.json({ goals });
    });
});

router.get("/mission-goals", (req, res) => {
  let goals = null;
  dbReadGoals("614de5c4646237d2b991f65c", "mission")
    .then((info) => {
      goals = info;
    })
    .then(() => {
      res.json({ goals });
    });
});

router.get("/quest-goals", (req, res) => {
  let goals = null;
  dbReadGoals("614de5c4646237d2b991f65c", "quest")
    .then((info) => {
      goals = info;
    })
    .then(() => {
      res.json({ goals });
    });
});

router.post("/new-goal/", (req, res) => {
  const data = req.body;

  dbCreateGoal(data).then((goal) => {
    res.json({goal})
  });
});

router.post("/update-goal-status/", (req, res) => {
  const data = req.body;
  dbUpdateGoalStatus(data).then((status) => {
    res.json({status})
  });
});

//put request
router.put("/update-goal", (req, res) => {
  const data = req.body;
  console.log(`data from body\n${data}`)

  dbUpdateGoal(data).then((status) => {
    res.json({status})
  });
});

module.exports = router;
