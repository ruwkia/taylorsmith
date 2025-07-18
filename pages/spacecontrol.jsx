function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>
        space control
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        Face the battle of complacency and morality as you repair your broken spaceship. This short narrative game explores decision-making under pressure.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img
          src="/images/projects/space_control.png"
          alt="Space Control Screenshot"
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
        Wrote, designed, and programmed the game in Godot Engine.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>
        play demo
      </p>
      <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        <iframe
          width="552"
          height="167"
          frameBorder="0"
          src="https://itch.io/embed/2690772"
          title="Space Control"
          style={{ border: 'none', maxWidth: '100%' }}
        >
          <a href="https://cndles.itch.io/space-control">Space Control by cndles</a>
        </iframe>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          className="button lavender-button hover:opacity-50 transition-opacity duration-300"
        >
          play on itch.io ↗
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          className="button pink-button hover:opacity-50 transition-opacity duration-300"
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default SpaceControl;
