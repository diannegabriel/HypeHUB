import "./SpotifyAuth.scss";
export default function SpotifyAuth() {
  return (
    <footer id='spotify-auth'>
      <div>
        <header className='spotify-auth-header'>
          <a
            className='btn-spotify'
            href='http://localhost:5000/login'
            rel='noopener noreferrer'
          >
            Login with Spotify
          </a>
        </header>
      </div>
    </footer>
  );
}
