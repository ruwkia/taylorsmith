function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '16px' }}>
      <h1 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>space control</h1>

      <p style={{ marginBottom: '1.5rem' }}>
        Face the battle of complacency and morality as you repair your broken spaceship in this short narrative sci-fi game.
      </p>

      {/* Game Screenshot */}
      <div style={{ marginBottom: '2rem' }}>
        <img
          src="/images/projects/space_control.png"
          alt="Space Control Screenshot"
          style={{ width: '100%', maxWidth: '800px' }}
        />
      </div>

      <h2 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>tools & role</h2>
      <p style={{ marginBottom: '2rem' }}>
        Wrote the game narrative and developed it using Godot Engine.
      </p>

      <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>play demo</h2>
      <iframe
        width="100%"
        height="167"
        frameBorder="0"
        src="https://itch.io/embed/2690772"
        title="Space Control"
        style={{ marginBottom: '2rem' }}
      >
        <a href="https://cndles.itch.io/space-control">Space Control by cndles</a>
      </iframe>

      {/* Open Itch.io Button */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#E6E6FA',
            color: '#C8A2C8',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            fontSize: '0.95rem',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          open on itch.io ↗
        </a>
      </div>

      {/* Back to Projects Button */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FEC2AE',
            color: '#F19797',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default SpaceControl;
