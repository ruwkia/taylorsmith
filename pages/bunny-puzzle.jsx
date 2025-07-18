function BunnyPuzzle() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '1rem',
        color: 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>bunny puzzles</p>

      <p style={{ marginBottom: '1rem' }}>
        A cozy puzzle game where players move bunny statues across tiles to solve colorful challenges and collect unique bunnies.
      </p>

      {/* Image (keep rectangular) */}
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

      {/* Tools & Role */}
      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>tools & role</p>
      <p style={{ marginBottom: '1rem' }}>
        Designed puzzle logic, created art in Procreate, and implemented movement in Godot Engine.
      </p>

      {/* Design Process */}
      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>design process</p>
      <p style={{ marginBottom: '1rem' }}>
        [You can add sketches, iterations, challenges, or design thoughts here later!]
      </p>

      {/* Demo */}
      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>play demo</p>
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

      {/* Open on Itch.io Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#E6E6FA', // lavender
            color: '#B495D2', // lighter purple text
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
            backgroundColor: '#FFD6E0', // light pink
            color: '#E895A5', // slightly darker pink text
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
