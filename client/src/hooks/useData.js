import axios from "axios";
import { useState, useEffect } from "react";

export default function useData() {
  const [state, setState] = useState({
    userId: null,
    userExp: 99,
    token: null,
    dailyGoals: null,
    missionGoals: null,
    questGoals: null,
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:5000/db/db-user"),
      axios.get("http://localhost:5000/auth/token"),
      axios.get("http://localhost:5000/db/daily-goals"),
      axios.get("http://localhost:5000/db/mission-goals"),
      axios.get("http://localhost:5000/db/quest-goals"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        userId: all[0].data.userId,
        token: all[1].data.access_token,
        dailyGoals: all[2].data.goals,
        missionGoals: all[3].data.goals,
        questGoals: all[4].data.goals,
      }));
    });
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
        console.log(res.headers);
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
