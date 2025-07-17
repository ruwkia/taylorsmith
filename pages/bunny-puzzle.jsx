function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>bunny puzzles</h1>
      
      <p style={{ marginBottom: '1rem' }}>
        A cozy puzzle game where players move bunny statues across tiles to solve colorful challenges and collect unique bunnies.
      </p>

      {/* Placeholder image (you can update src when ready) */}
      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>tools & role</h2>
      <p style={{ marginBottom: '1rem' }}>
        Designed puzzle logic, created art in Procreate, and implemented movement in Godot Engine.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>design process</h2>
      <p style={{ marginBottom: '1rem' }}>
        [You can add sketches, iterations, challenges, or design thoughts here later!]
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>play demo</h2>
      <iframe
        frameBorder="0"
        src="https://itch.io/embed-upload/10190217?color=333333"
        allowFullScreen
        width="100%"
        height="600"
        title="Bunny Puzzle"
        style={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}
      ></iframe>

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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.25s ease',
            display: 'inline-block',
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = '#d8d8f0')
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = '#E6E6FA')
          }
        >
          open on itch.io ↗
        </a>
      </div>

      {/* Back to Projects Button */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FFE4E1',
            color: '#8B0000',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            fontSize: '0.95rem',
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default BunnyPuzzle;
