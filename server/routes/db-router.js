const express = require("express");
const router = express.Router();
router.use(express.json());
require("dotenv").config({ path: "../.env" });

//Import db helper functions for users.
const dbReadUser = require(".././dbHelpers/users/dbReadUser");
const dbUpdateUserStats = require("../dbHelpers/users/dbUpdateUserStats");

//Import db helper functions for goals.
const dbReadGoals = require(".././dbHelpers/goals/dbReadGoals");
const dbCreateGoal = require("../dbHelpers/goals/dbCreateGoal");
const dbUpdateGoalStatus = require("../dbHelpers/goals/dbUpdateGoalStatus");
const dbUpdateGoal = require("../dbHelpers/goals/dbUpdateGoal");
const dbDeleteGoal = require("../dbHelpers/goals/dbDeleteGoal");


router.get("/db-user", (req, res) => {
  dbReadUser("billy@jo.com", "password").then((data) => {
    res.json({ data });
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
    res.json({ goal });
  });
});

router.post("/update-goal-status/", (req, res) => {
  const data = req.body;
  dbUpdateGoalStatus(data).then((status) => {
    res.json({ status });
  });
});

router.put("/update-goal", (req, res) => {
  const data = req.body;
  dbUpdateGoal(data).then((update) => {
    res.json({ update });
  });
});

router.put("/update-user-stats", (req, res) => {
  const data = req.body;
  dbUpdateUserStats(data)
  .then((update) => {
    res.json({ update });
  });
});

router.delete("/delete-goal", (req, res)=> {
  const data = req.body;
  //Pass goalId to delete func
  dbDeleteGoal(data);
})
module.exports = router;
