import axios from "axios";
import { useState, useEffect } from "react";

//Boolen, cause State to be set on original load.
let hasFetchedData = false;
//Original state before load.
let state = {
  userExp: 99,
};

//Do not change updaters
let updaters = [];

//Do not export setState
//setState is expecting an object.
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
    //Update db with new goal
    axios({
      method: "post",
      url: "/db/new-goal",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(formData),
    }).then(
      (res) => {
        //Update state to match db
        const goalTypeKey = `${res.data.goal.goalType}Goals`
        setState({
          [goalTypeKey]: [...state[goalTypeKey], res.data.goal]
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function updateGoalStatus(data){
    //Update db with new status.
    axios({
      method: "post",
      url: "http://localhost:5000/db/update-goal-status",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    }).then(
      (res) => {
        //Update state to match db
        // console.log(res.data);
        const newStatus = res.data.status.status
        const id = res.data.status.goalId
        const goalKey = `${data.goalType}Goals`

        //find array of goals, same type
        const goalsOfType = [...state[goalKey]]
        //iterate through list of goals
        for (let i = 0; i < state[goalKey].length; i++){
        // for (const goal of goalsOfType){
          //find the correct goal (goalId)
          if (state[goalKey][i].goalId === id){
            const pastStatus = [...state[goalKey]][i].status;
            console.log(`pastStatus: ${pastStatus}`)
    
          
          //Array of one goal type
            const updatedArray = [...state[goalKey]]
            updatedArray[i].status = newStatus
            // console.log(blah)
            // blah[i].status = newStatus;
            // console.log(blah)
            setState({questGoals: updatedArray}
              // state[goalKey]: updatedArray,
            )
          }
        }
        //Update status of that goal
        //set the state

      },
      (err) => {
        console.log(err);
      }
    );

  }

  return { state, createGoal, updateGoalStatus };
}
