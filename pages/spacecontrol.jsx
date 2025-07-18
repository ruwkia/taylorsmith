function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'IBM Plex Mono' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
        space control
      </h1>

      <p style={{ marginBottom: '1.5rem' }}>
        Face the battle of complacency and morality as you repair your broken spaceship in this short narrative sci-fi game.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/space_control.png" 
          alt="Space Control Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '0px'
          }}
        />
      </div>

      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem' }}>
        tools & role
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        Wrote the game narrative and developed it using Godot Engine.
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem' }}>
        play demo
      </h2>

      {/* Embedded itch.io iframe */}
      <div style={{ margin: '1.5rem 0' }}>
        <iframe 
          title="Space Control Embed"
          frameBorder="0"
          src="https://itch.io/embed/2690772" 
          width="100%" 
          height="167" 
          style={{ borderRadius: '0px' }}
        >
          <a href="https://cndles.itch.io/space-control">Space Control by cndles</a>
        </iframe>
      </div>

      {/* Open Itch.io Button */}
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
            boxShadow: 'none',
            transition: 'all 0.25s ease',
            display: 'inline-block',
            fontSize: '0.95rem',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.target.style.opacity = '1')}
        >
          open on itch.io ↗
        </a>
      </div>

      {/* Back to Projects Button */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FEC2AE',
            color: '#F89DA0',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            boxShadow: 'none',
            fontSize: '0.95rem',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.target.style.opacity = '1')}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default SpaceControl;
