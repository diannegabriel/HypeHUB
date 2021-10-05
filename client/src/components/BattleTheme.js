import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BattleTheme.scss";
import SpotifyPlayer from "react-spotify-web-playback";
export default function BattleTheme(props) {
  console.log("BattleTheme props", props);
  const { setTheme, theme, token } = props;
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
    <footer id='battle-theme' className='rpgui-container framed'>
      <SpotifyPlayer
        autoPlay={true}
        token={token}
        uris={uri}
        play={true}
        name={"HypeHUB - Battletheme"}
        showSaveIcon={true}
        initialVolume={0.3}
        styles={{
          bgColor: "#4e4a4e",
          activeColor: "#d27d2c",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#854c30",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
      <button className='btn' type='button' onClick={() => setTheme("")}>
        Choose a different theme
      </button>
    </footer>
  );
}
