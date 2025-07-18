function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', fontSize: '1rem', color: '#000' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>bunny puzzles</h1>

      <p style={{ marginBottom: '1rem' }}>
        A cozy puzzle game where players move bunny statues across tiles to solve colorful challenges and collect unique bunnies.
      </p>

      {/* Main project image (rectangle) */}
      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'block',
          }}
        />
      </div>

      <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '2rem' }}>tools & role</h2>
      <p style={{ marginBottom: '1rem' }}>
        Designed puzzle logic, created art in Procreate, and implemented movement in Godot Engine.
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '2rem' }}>design process</h2>
      <p style={{ marginBottom: '1rem' }}>
        [You can add sketches, iterations, challenges, or design thoughts here later!]
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '2rem' }}>play demo</h2>
      <iframe
        frameBorder="0"
        src="https://itch.io/embed/2690772"
        width="100%"
        height="167"
        title="Bunny Puzzle"
        style={{
          border: 'none',
          marginTop: '1rem',
        }}
      >
        <a href="https://cndles.itch.io/space-control">Play Bunny Puzzle on itch.io</a>
      </iframe>

      {/* Open Itch.io Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#E6E6FA',
            color: '#4B0082',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
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
          open on itch.io ↗
        </a>
      </div>

      {/* Back to Projects Button */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FFD6E0',
            color: '#C71585',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
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
