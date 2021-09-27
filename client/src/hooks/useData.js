import axios from "axios";
import { useState, useEffect } from "react";

export default function useData() {
  const [state, setState] = useState({
    userId: null,
    userExp: 99,
    token: null,
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:5000/db/db-user"),
      axios.get("http://localhost:5000/auth/token"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        userId: all[0].data.userId,
        token: all[1].data.access_token,
      }));
    });
  }, []);

  return state;
}
