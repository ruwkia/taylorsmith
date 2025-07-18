function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', fontFamily: "'IBM Plex Mono', monospace" }}>
        bunny puzzles
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
       bunny puzzles is a cozy mobile game where you rotate pipes to create a clear path for water before the timer runs out—or before it spills. completing levels unlocks new bunny characters to collect!
</p>
      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '0',
            boxShadow: 'none',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>
        tools & role
      </p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        created all assets in Adobe Illustrator and built the game in Godot Engine.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>
        design process
      </p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        [coming soon!]
      </p>

      <div style={{ marginBottom: '2rem' }}>
  <img 
    src="/images/artworks/Artboard 1.png" 
    alt="Design process image" 
    style={{
      width: '100%',
      maxWidth: '800px',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

<div style={{ textAlign: 'center', marginTop: '2rem' }}>
  <a
    href="/projects"
    style={{
      backgroundColor: '#FED4EA', // light pink background
      color: '#EBA1C2',           // soft pink text
      padding: '10px 24px',
      borderRadius: '9999px',
      textDecoration: 'none',
      fontSize: '1rem',
      display: 'inline-block',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.2s ease-in-out'
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
