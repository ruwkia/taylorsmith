function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'IBM Plex Mono', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '1.5rem' }}>space control</h1>

      <p style={{ marginBottom: '1rem' }}>
        Face the battle of complacency and morality as you repair your broken spaceship in this short narrative sci-fi game.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/space_control.png" 
          alt="Space Control Screenshot" 
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
        Wrote the game narrative and developed it using Godot Engine.
      </p>

      <h2 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '2rem' }}>play demo</h2>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#E6E6FA',
            color: '#9370DB',
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
          open on itch.io ↗
        </a>
      </div>

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

export default SpaceControl;
