import axios from "axios";
import { useState, useEffect } from "react";

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
          userId: all[0].data.data.userId,
          userExp: all[0].data.data.userExp,
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
        setState({
          [goalTypeKey]: [...state[goalTypeKey], res.data.goal],
        });
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

      ///////////////////////////////////////////////////////
      //ISSUE: Will not be able to update goalType with out//
      //removing goal from one list and adding to another////
      ///////////////////////////////////////////////////////

      //Iterate through array of goals based on type.
      for (let i = 0; i < state[goalKey].length; i++) {
        if (state[goalKey][i].goalId === id) {
          //Update existing state with info returned from db update.
          const updatedGoal = [...state[goalKey]];
          updatedGoal[i].goalName = name;
          updatedGoal[i].goalAttribute = attr;

          setState({
            goalKey: updatedGoal,
          });
        }
      }
    });
  }

  function updateUserStats(data){
    const updateData = {
      //data currently blank from goalStatus onClick
      //REMOVE?
      ...data,
      userId: state.userId,
      userExp: state.userExp,
    }
    axios({
      method: "put",
      url: "http://localhost:5000/db/update-user-stats",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(updateData),
    }).then((res) => {
      //Update state here
      const updatedExp = res.data.update.newData.exp
      setState({
        userExp: updatedExp,
      })
    })
  }

  return { 
    state, 
    shuffleQuote,
    createGoal, 
    updateGoalStatus, 
    updateGoal,
    updateUserStats };

}
