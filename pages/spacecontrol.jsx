function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'IBM Plex Mono', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontWeight: '700', marginBottom: '1rem' }}>space control</h1>

      <p style={{ marginBottom: '1rem' }}>
        A short story game about morality and complacency. Repair a broken ship while grappling with questions of what’s worth saving.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/space_control.png" 
          alt="Space Control Screenshot" 
          style={{ width: '100%', maxWidth: '800px' }}
        />
      </div>

      <h2 style={{ fontWeight: '700', marginTop: '2rem' }}>tools & role</h2>
      <p style={{ marginBottom: '1rem' }}>
        Created all assets in Adobe Illustrator and developed the game using Godot Engine.
      </p>

      <h2 style={{ fontWeight: '700', marginTop: '2rem' }}>play demo</h2>
      <div style={{ margin: '1rem 0' }}>
        <iframe 
          width="552" 
          height="167" 
          frameBorder="0" 
          src="https://itch.io/embed/2690772"
          title="Space Control"
        >
          <a href="https://cndles.itch.io/space-control">Space Control by cndles</a>
        </iframe>
      </div>

      {/* Open on Itch.io Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
            fontFamily: 'IBM Plex Mono',
            fontSize: '1rem',
            display: 'inline-block'
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
            fontFamily: 'IBM Plex Mono',
            fontSize: '1rem',
            display: 'inline-block'
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default SpaceControl;
