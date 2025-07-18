function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'IBM Plex Mono', color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontWeight: '700', fontSize: '1.25rem', marginBottom: '1rem' }}>bunny puzzles</h1>

      <p style={{ marginBottom: '1rem' }}>
        Bunny Puzzle is a mobile puzzle game where players rotate and connect tubes to guide flowing water before the timer runs out—or before it spills! Each completed challenge unlocks a new collectible bunny character, adding charm and replayability to the gameplay.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '0px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      <h2 style={{ fontWeight: '700', fontSize: '1.25rem', marginTop: '2rem' }}>tools & role</h2>
      <p style={{ marginBottom: '1rem' }}>
        Created all assets in Adobe Illustrator and built the game in Godot Engine.
      </p>

      <h2 style={{ fontWeight: '700', fontSize: '1.25rem', marginTop: '2rem' }}>design process</h2>
      <p style={{ marginBottom: '1rem' }}>
        [You can add sketches, iterations, challenges, or design thoughts here later!]
      </p>

      {/* Open on itch.io (future use) */}

      {/* Back to Projects Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FEC2AE', // light pink
            color: '#FAD4C0', // lighter pink text
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s ease-in-out',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.04)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default BunnyPuzzle;
