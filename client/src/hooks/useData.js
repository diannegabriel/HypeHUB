import axios from "axios";
import { useState, useEffect } from "react";
// const ObjectId = require("mongodb").ObjectID;

//Boolen, cause State to be set on original load.
let hasFetchedData = false;
//Original state before load.
let state = {};
//Do not change updaters
let updaters = [];
//Do not export setState -> call if form another function in the file.
//setState is expecting an object.
const setState = (newState) => {
  state = {
    ...state,
    ...newState,
  };

  updaters.forEach((updater) => {
    updater(state);
  });
};
//TO DO? logout func to set state to null.
export default function useData() {
  const newUpdater = useState()[1];
  useEffect(() => {
    updaters.push(newUpdater);
    return () => {
      updaters = updaters.filter((updater) => updater !== newUpdater);
    };
  }, []);

  useEffect(() => {
    if (!hasFetchedData) {
      hasFetchedData = true;
      Promise.all([
        axios.get("http://localhost:5000/db/db-user"),
        axios.get("http://localhost:5000/auth/token"),
        axios.get("http://localhost:5000/db/daily-goals"),
        axios.get("http://localhost:5000/db/mission-goals"),
        axios.get("http://localhost:5000/db/quest-goals"),
        axios.get("http://localhost:5000/quote"),
      ]).then((all) => {
        setState({
          //See updateLogin below
          // userId: all[0].data.data.userId,
          userExp: all[0].data.data.userExp,
          userStrength: all[0].data.data.userStrength,
          userVitality: all[0].data.data.userVitality,
          userKnowledge: all[0].data.data.userKnowledge,
          userSocial: all[0].data.data.userSocial,
          userWillpower: all[0].data.data.userWillpower,
          token: all[1].data.access_token,
          dailyGoals: all[2].data.goals,
          missionGoals: all[3].data.goals,
          questGoals: all[4].data.goals,
          quote: all[5].data.quote,
        });
      });
    }
  }, []);

  const shuffleQuote = () => {
    axios.get("http://localhost:5000/quote").then((res) => {
      setState({
        quote: res.data.quote,
      });
    });
  };

  function createGoal(formData) {
    //Update db with new goal
    axios({
      method: "post",
      url: "/db/new-goal",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(formData),
    }).then(
      (res) => {
        //Update state to match db
        const goalTypeKey = `${res.data.goal.goalType}Goals`;

        if (state[goalTypeKey] === -1 || state[goalTypeKey].length === null) {
          console.log(`===${state[goalTypeKey]}`);
          //If there are no existing goals of this tpye:
          setState({
            [goalTypeKey]: [res.data.goal],
          });
        } else {
          console.log(`===${state[goalTypeKey]}`);
          setState({
            [goalTypeKey]: [...state[goalTypeKey], res.data.goal],
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function updateGoalStatus(data) {
    //Update db with new status.
    axios({
      method: "post",
      url: "http://localhost:5000/db/update-goal-status",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    }).then(
      (res) => {
        const id = res.data.status.goalId;
        const newStatus = res.data.status.status;
        const goalKey = `${data.goalType}Goals`;

        //iterate through list of goals
        for (let i = 0; i < state[goalKey].length; i++) {
          //find the correct goal (goalId)
          if (state[goalKey][i].goalId === id) {
            const updatedArray = [...state[goalKey]];
            updatedArray[i].status = newStatus;
            setState({
              goalKey: updatedArray,
            });
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function updateGoal(data) {
    axios({
      method: "put",
      url: "http://localhost:5000/db/update-goal",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    }).then((res) => {
      console.log(res.data.update);
      const id = res.data.update.goalId;
      const name = res.data.update.goalName;
      const attr = res.data.update.goalAttribute;
      const goalKey = `${res.data.update.goalType.toLowerCase()}Goals`;
      let foundGoal = false;

      ////////GOAL TYPE REMAINS THE SAME////////
      for (let i = 0; i < state[goalKey].length; i++) {
        if (state[goalKey][i].goalId === id) {
          foundGoal = true;
          //Update existing state with info returned from db update.
          const updatedGoal = [...state[goalKey]];
          updatedGoal[i].goalName = name;
          updatedGoal[i].goalAttribute = attr;

          setState({
            goalKey: updatedGoal,
          });
        }
      }
      ////////GOAL TYPE DOES NOT REAMIN THE SAME////////
      if (!foundGoal) {
        //MOVE THIS helper
        const findGoal = (goalType) => {
          for (let i = 0; i < state[goalType].length; i++) {
            if (state[goalType][i].goalId === id) {
              foundGoal = true;
              //REMOVE goal from old goalType list.
              let oldGoalArr = [...state[goalType]];
              const removedGoal = oldGoalArr.splice(i, 1)[0];
              //ADD goal to appropriate goalType list.
              let newGoalArr = [removedGoal, ...state[goalKey]];
              setState({
                [goalType]: oldGoalArr,
                [goalKey]: newGoalArr,
              });
            }
          }
        };

        const goaltypes = ["dailyGoals", "missionGoals", "questGoals"];
        //determine two options that are not goaltype
        const checkTypes = goaltypes.filter((goalName) => goalName !== goalKey);
        for (const type of checkTypes) {
          findGoal(type);
        }
      }
    });
  }

  function deleteGoal({ goalId, goalType }) {
    axios({
      method: "delete",
      url: "http://localhost:5000/db/delete-goal",
      headers: { "content-type": "application/json" },
      data: JSON.stringify({ goalId: goalId }),
    });

    const goalKey = `${goalType}Goals`;

    //remove deleted goal from goal array in state and update state with new array.
    const updatedGoalArr = [...state[goalKey]].filter(
      (goal) => goal.goalId !== goalId
    );

    setState({
      [goalKey]: updatedGoalArr,
    });
  }

  function updateUserStats(data) {
    //data = {goalId, goalType}
    const goalKey = `${data.goalType.toLowerCase()}Goals`;

    let attributesToIncrement = [];
    for (const goal of state[goalKey]) {
      if (goal.goalId === data.goalId) {
        attributesToIncrement = goal.goalAttribute;
      }
    }

    const updateData = {
      userId: state.userId,
      Exp: state.userExp + 10,
      Strength: state.userStrength,
      Vitality: state.userVitality,
      Knowledge: state.userKnowledge,
      Social: state.userSocial,
      Willpower: state.userWillpower,
    };
    //iterate through array and append value to obj w/ current val
    for (const el of attributesToIncrement) {
      //Format attr as updateData key (capitalize first letter ex. knowledge -> Knowledge)
      const key = el.charAt(0).toUpperCase() + el.slice(1);
      //increment only the attributes associated with the goal
      updateData[key] += 5;
    }

    axios({
      method: "put",
      url: "http://localhost:5000/db/update-user-stats",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(updateData),
    }).then((res) => {
      // console.log(res);

      //Update state to match db.
      setState({
        userExp: updateData.Exp,
        userStrength: updateData.Strength,
        userVitality: updateData.Vitality,
        userKnowledge: updateData.Knowledge,
        userSocial: updateData.Social,
        userWillpower: updateData.Willpower,
      });
    });
  }

  function updateLogin() {
    console.log(`hit updateLogin`);
    const billyId = "614de5c4646237d2b991f65c";

    setState({
      userId: billyId,
    });
  }

  return {
    state,
    shuffleQuote,
    createGoal,
    updateGoalStatus,
    updateGoal,
    deleteGoal,
    updateUserStats,
    updateLogin,
  };
}
