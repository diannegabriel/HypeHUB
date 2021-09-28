import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BattleTheme.scss";

const track = {
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
};

export default function BattleTheme(props) {
  const [player, setPlayer] = useState(undefined);
  // store info about currently playing track
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);
  const [playbackState, setPlaybackState] = useState({
    position: 0,
    totalTime: 0,
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "HypeHUB - BattleTheme",
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
      player.addListener("player_state_changed", (state) => {
        // console.log("state - listener", state);
        if (!state) {
          return;
        }

        player.getCurrentState().then((state) => {
          console.log("state after getCurrent state", state);
          !state ? setActive(false) : setActive(true);
          setTrack(state.track_window.current_track);
          setPaused(state.paused);
          setPlaybackState((prev) => ({
            ...prev,
            position: state.position,
            totalTime: state.duration,
          }));
        });
      });
      //Test to check if i can access transfer playback endpoint, will use when genrating battletheme...
      axios.get("http://localhost:5000/transfer-playback").then((res) => {
        console.log(">>>Spotify-API--transfer playback get req", res);
        // setState in here...
        // //not sure how this works exactly yet...
      });
    };
  }, [props.token]);
  return (
    <footer id='battle-theme'>
      <div className='container'>
        <div className='main-wrapper rpgui-container framed'>
          <img
            src={current_track.album.images[0].url}
            className='now-playing__cover'
            alt=''
          />
          <div className='now-playing__side'>
            <div className='now-playing__name'>{current_track.name}</div>

            <div className='now-playing__artist'>
              {current_track.artists[0].name}
            </div>
          </div>
          <button
            className='btn btn-spotify'
            onClick={() => {
              player.previousTrack();
            }}
          >
            <i className='fas fa-backward'></i>
          </button>

          <button
            className='btn btn-spotify'
            onClick={() => {
              player.togglePlay();
            }}
          >
            {is_paused ? (
              <i className='fas fa-play'></i>
            ) : (
              <i className='fas fa-pause'></i>
            )}
          </button>

          <button
            className='btn btn-spotify'
            onClick={() => {
              player.nextTrack();
            }}
          >
            <i className='fas fa-forward'></i>
          </button>
          {/* <div className='progress-bar'>
            <div className='progress-bar__position'>
              {playbackState.position}
            </div>
            <div className='progress-bar__duration'>
              {playbackState.totalTime}
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
