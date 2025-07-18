function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', fontFamily: "'IBM Plex Mono', monospace" }}>
        bunny puzzles
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        bunny puzzles is a cozy mobile game where you rotate pipes to create a clear path for water before the timer runs out—or before it spills. completing levels unlocks new bunny characters to collect!
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/artworks/bunnygame.png" 
          alt="Bunny Puzzle Screenshot" 
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
        created all assets in Adobe Illustrator and built the game in Godot Engine.
      </p>

<p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
  here’s a peek at the design process, from concept sketches to animated loading screens:
</p>

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  marginBottom: '2rem'
}}>
  <img src="/images/artworks/bunnyappicon.png" alt="App icon design" style={{ width: '100%' }} />
  <img src="/images/artworks/Artboard 1.png" alt="Design process sketch" style={{ width: '100%' }} />
  <img src="/images/artworks/bunnygame.png" alt="Main puzzle screen" style={{ width: '100%' }} />
  <img src="/images/artworks/bunnyinfo.png" alt="Plot summary" style={{ width: '100%' }} />
</div>

<p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
  the game opens with a short story about a bunny who travels between biomes to repair leaky water systems. players must rotate pipes to guide water to the goal — but act fast before it spills! the app icon and interface were created first, followed by layout testing and visual design of characters, shop screens, and biomes.
</p>

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  marginBottom: '2rem'
}}>
  <img src="/images/artworks/bunnysandbiome.PNG" alt="Sand biome screen" style={{ width: '100%' }} />
  <img src="/images/artworks/roughdemogif.gif" alt="Rough gameplay demo" style={{ width: '100%' }} />
  <img src="/images/artworks/bunnyloadinggif.gif" alt="Pink loading bunny animation" style={{ width: '100%' }} />
  <img src="/images/artworks/otherloadinggif.gif" alt="Alternate loading animation" style={{ width: '100%' }} />
  <img src="/images/artworks/blackloadingbunny.gif" alt="Black bunny loading animation" style={{ width: '100%' }} />
</div>

<p style={{ fontSize: '1rem' }}>
  additional loading screens and gameplay elements were prototyped to reflect the soft and cozy aesthetic. multiple color schemes and animation styles were tested to help bring the game’s tone to life.
</p>


      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="/projects"
          style={{
            backgroundColor: '#FED4EA',
            color: '#EBA1C2',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            display: 'inline-block',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s ease-in-out'
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
