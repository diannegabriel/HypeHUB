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
        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);
        console.log(">>>>>>", state);
        setPlaybackState({
          position: state.position,
          totalTime: state.duration,
        });
        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });
    };
    //Test to check if i can access user's currently playing track. will use later
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/me/player/currently-playing",
      headers: {
        Authorization: `Bearer ${props.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      console.log(">>>Spotify-API--whatever request/endpoint", res);
      // setState in here...
      // need to configure the right scope for authorization request.
    });
  }, [props.token]);
  return (
    <footer id='battle-theme'>
      <div className='container'>
        <div className='main-wrapper'>
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
