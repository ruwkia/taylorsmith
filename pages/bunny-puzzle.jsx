function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.6' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>bunny puzzles</p>

      <p style={{ marginBottom: '1rem' }}>
        A cozy puzzle game where players move bunny statues across tiles to solve colorful challenges and collect unique bunnies.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img
          src="/images/projects/bunnygame.png"
          alt="Bunny Puzzle Screenshot"
          style={{
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '0.5rem'
          }}
        />
      </div>

      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>tools & role</p>
      <p style={{ marginBottom: '1rem' }}>
        Designed puzzle logic, created art in Procreate, and implemented movement in Godot Engine.
      </p>

      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>design process</p>
      <p style={{ marginBottom: '1rem' }}>
        [You can add sketches, iterations, challenges, or design thoughts here later!]
      </p>

      <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>play demo</p>
      <iframe
        width="100%"
        height="167"
        frameBorder="0"
        src="https://itch.io/embed/2690772"
        title="Space Control"
        style={{ border: 'none', borderRadius: '0.5rem', marginBottom: '2rem' }}
      ></iframe>

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
            display: 'inline-block'
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

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FFD6E0',
            color: '#8B0000',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.2s ease-in-out',
            display: 'inline-block'
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
