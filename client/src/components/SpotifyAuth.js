import "./SpotifyAuth.scss";

export default function SpotifyAuth() {
  return (
    <footer id='spotify-auth'>
      <div className='rpgui-container framed'>
        <header className='spotify-auth-header'>
          <a
            className='btn-spotify'
            href='http://localhost:5000/login'
            rel='noopener noreferrer'
          >
            <img src='/spotify-icon-white.png' alt='Spotify Logo' />
            Login with Spotify
          </a>
        </header>
      </div>
    </footer>
  );
}
