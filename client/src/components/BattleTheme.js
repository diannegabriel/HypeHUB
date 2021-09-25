import React, { useEffect, useState } from "react";
import "./BattleTheme.scss";

export default function BattleTheme(props) {
  const [player, setPlayer] = useState(undefined);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(props.token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, [props.token]);
  return (
    <footer id='battle-theme'>
      <div className='container'>
        <div className='main-wrapper'></div>
      </div>
    </footer>
  );
}
