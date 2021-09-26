import axios from "axios";
import { useState, useEffect } from "react";

export default function useData(){

const [state, setState] = useState({
  userId: null,
  
})

useEffect(() => {
  axios.get("http://localhost:5000/db/dbtest")
  .then((res) => {
    console.log(`----\n${JSON.stringify(res)}\n----`)
    console.log(`----\n${res.data.userId}\n----`)
setState((prev) => ({
  ...prev,
  userId: res.data.userId
}))
  });
}, []);

return state;
}