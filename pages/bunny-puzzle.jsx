function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', fontSize: '1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>bunny puzzles</h1>
      
      <p style={{ marginBottom: '1rem' }}>
        A cozy puzzle game where players move bunny statues across tiles to solve colorful challenges and collect unique bunnies.
      </p>

      {/* Rectangle-style image layout */}
      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/projects/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '100%',
            borderRadius: '0',
            boxShadow: 'none'
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
        style={{ borderRadius: '0', boxShadow: 'none' }}
      ></iframe>

      {/* Open Itch.io Button (same as resume style) */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(to right, #ffd6e0, #e6e6fa)',
            color: '#6D4C9A',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
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

      {/* Back to Projects Button - now pink and animated */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href="/projects"
          style={{
            background: 'linear-gradient(to right, #ffe4f0, #ffcfd7)',
            color: '#b14765',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
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
