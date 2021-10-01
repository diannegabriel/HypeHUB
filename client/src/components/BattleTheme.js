import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BattleTheme.scss";
import SpotifyPlayer from "react-spotify-web-playback";
export default function BattleTheme(props) {
  console.log("BattleTheme props", props);
  const { theme, token } = props;
  const [uri, setUri] = useState([]);

  // let uri = extractSpotifyUri(theme);
  useEffect(() => {
    async function getUri() {
      const uri = await axios
        .get(`http://localhost:5000/recs/${theme}`)
        .then(({ data }) => data);
      setUri(uri);
      console.log("uri >>>", uri);
    }
    getUri();
  }, [theme]);
  return (
    <footer id='battle-theme'>
      <SpotifyPlayer token={token} uris={uri} />
    </footer>
  );
}
