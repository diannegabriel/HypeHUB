import axios from "axios";
import { useState, useEffect } from "react";

let hasFetchedData = false;
let state = {
  userExp: 99,
};
//Do not change updaters
let updaters = [];
//Do not export setState
const setState = (newState) => {
  state = {
    ...state,
    ...newState
  }

  updaters.forEach(updater => {
    updater(state)
  })
}
//logout func to set state to null.
export default function useData() {
  const newUpdater = useState()[1];
  useEffect(()=>{
    updaters.push(newUpdater);
    return ()=>{
      updaters = updaters.filter((updater) => updater !== newUpdater)
    }
  }, [])

  useEffect(() => {
    if (!hasFetchedData){
      hasFetchedData = true;
    Promise.all([
      axios.get("http://localhost:5000/db/db-user"),
      axios.get("http://localhost:5000/auth/token"),
      axios.get("http://localhost:5000/db/daily-goals"),
      axios.get("http://localhost:5000/db/mission-goals"),
      axios.get("http://localhost:5000/db/quest-goals"),
    ]).then((all) => {
      setState({
        userId: all[0].data.userId,
        token: all[1].data.access_token,
        dailyGoals: all[2].data.goals,
        missionGoals: all[3].data.goals,
        questGoals: all[4].data.goals,
      });
    });
  }
  }, []);

  function createGoal(formData) {
    console.log(`func in useData called.`)
    axios({
      method: "post",
      url: "http://localhost:5000/db/new-goal",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(formData),
    }).then(
      (res) => {
        console.log(res.data);
        const goalTypeKey = `${res.data.goal.goalType}Goals`
        setState({
          [goalTypeKey]: [...state[goalTypeKey]]
        })
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function updateGoalStatus(data){
    axios({
      method: "post",
      url: "http://localhost:5000/db/update-goal-status",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    }).then(
      (res) => {
        console.log(res.headers);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  return { state, createGoal, updateGoalStatus };
}
