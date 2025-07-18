function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'IBM Plex Mono', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '1.5rem' }}>bunny puzzle</h1>

      <p style={{ marginBottom: '1rem' }}>
        Bunny Puzzle is a mobile game where players rotate and connect tubes to guide flowing water before time runs out—or before it spills! Each completed challenge unlocks a new bunny character to collect.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '0',
            objectFit: 'cover',
          }}
        />
      </div>

      <h2 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '2rem' }}>tools & role</h2>
      <p style={{ marginBottom: '1rem' }}>
        Created all game assets in Adobe Illustrator and developed the full game using Godot Engine.
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '2rem' }}>design process</h2>
      <p style={{ marginBottom: '1rem' }}>
        [To be added later]
      </p>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FEC2AE',
            color: '#e45b40',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'normal',
            display: 'inline-block',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s ease-in-out',
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
