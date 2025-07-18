function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace" }}>
      {/* Page Heading */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        space control
      </h1>

      {/* Description */}
      <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
        Face the battle of complacency and morality as you repair your broken spaceship. 
        Space Control is a short narrative game that explores isolation, choice, and emotional consequence.
      </p>

      {/* Embedded Itch.io Game */}
      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <iframe
          title="Space Control Game"
          width="552"
          height="167"
          frameBorder="0"
          src="https://itch.io/embed/2690772"
          style={{ border: 'none' }}
        >
          <a href="https://cndles.itch.io/space-control">Play Space Control on itch.io</a>
        </iframe>
      </div>

      {/* Tools & Role Section */}
      <h2 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '2rem' }}>tools & role</h2>
      <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
        Created all visual assets in Adobe Illustrator and developed the game in Godot Engine.
      </p>

      {/* Play on Itch.io Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#E6E6FA',
            color: '#D8BFD8',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          play on itch.io ↗
        </a>
      </div>

      {/* Back to Projects Button */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FEC2AE',
            color: '#F8AFA0',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default SpaceControl;
