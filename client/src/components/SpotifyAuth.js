export default function SpotifyAuth() {
  return (
    <footer id='Spotify-Auth'>
      <div>
        <header className='spotify-auth-header'>
          <a
            className='btn-spotify'
            href='http://localhost:5000/auth/login'
            rel='noopener noreferrer'
          >
            Login with Spotify
          </a>
        </header>
      </div>
    </footer>
  );
}
