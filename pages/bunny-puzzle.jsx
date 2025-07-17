function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>bunny puzzles</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        A cozy puzzle game where players move bunny statues across tiles to solve colorful biome-based challenges.
      </p>

      {/* Placeholder for image */}
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '400px',
          backgroundColor: '#f5f5f5',
          borderRadius: '1rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888',
          fontSize: '1rem',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        [add hero image here]
      </div>

      <h2 style={{ fontSize: '1.3rem', color: '#FF69B4' }}>tools & role</h2>
      <p style={{ marginBottom: '2rem' }}>
        I designed the puzzle logic, illustrated the art in Procreate, and implemented movement and interactions in Godot Engine.
      </p>

      <h2 style={{ fontSize: '1.3rem', color: '#FFA500' }}>design process</h2>
      <p style={{ marginBottom: '2rem' }}>
        [add sketches, challenges, visual inspiration, or iteration notes here]
      </p>

      <h2 style={{ fontSize: '1.3rem', color: '#9370DB' }}>play demo</h2>
      {/* Placeholder for itch.io embed */}
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '400px',
          backgroundColor: '#f5f5f5',
          borderRadius: '1rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888',
          fontSize: '1rem',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        [embed itch.io demo here]
      </div>

      <a
        href="/projects"
        style={{
          display: 'inline-block',
          backgroundColor: '#E6E6FA',
          color: '#4B0082',
          padding: '10px 24px',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: 500,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = '#d8d8f0')
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = '#E6E6FA')
        }
      >
        ← back to projects
      </a>
    </div>
  );
}

export default BunnyPuzzle;
