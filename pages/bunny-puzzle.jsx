function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bunny Puzzle</h1>
      <p>A cozy puzzle game where players move bunny statues across tiles to solve challenges.</p>
      <img src="/images/bunny-puzzle-hero.png" alt="Bunny Puzzle screenshot" style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', margin: '2rem 0' }} />
      <h2>Tools & Role</h2>
      <p>Designed puzzle logic, created art in Procreate, and implemented movement in Godot Engine.</p>
      <h2>Design Process</h2>
      <p>[Add your sketches, iterations, problems solved, inspirations, etc.]</p>
      <h2>Play Demo</h2>
      <iframe
        src="YOUR-ITCH.IO-URL-HERE"
        width="100%"
        height="600"
        title="Bunny Puzzle Demo"
        frameBorder="0"
        allowFullScreen
      />
      <a
        href="/projects"
        style={{
          marginTop: '2rem',
          display: 'inline-block',
          backgroundColor: '#E6E6FA',
          color: '#4B0082',
          padding: '10px 24px',
          borderRadius: '9999px',
          textDecoration: 'none',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
        }}
      >
        ← Back to projects
      </a>
    </div>
  );
}

export default BunnyPuzzle;
