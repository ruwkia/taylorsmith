function BunnyPuzzle() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', fontFamily: "'IBM Plex Mono', monospace" }}>
        bunny puzzles
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        bunny puzzles is a cozy mobile game concept where you rotate pipes to create a clear path for water before the timer runs out—or before it spills. completing levels unlocks new bunny characters to collect!
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          src="/images/artworks/IMG_0245.png"
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
  here’s a peek at the design process, from early level mockups to interface concepts and loading animations:
</p>

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  marginBottom: '2rem'
}}>
  
  <img src="/images/artworks/bunnyappicon.png" alt="App icon design" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', gridColumn: 'span 2' }} />
  <img src="/images/artworks/Artboard 1.png" alt="Design process sketch" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/artworks/bunnyinfo.png" alt="Plot summary" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
</div>

<p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
   the project began with biome-level art concepts, exploring different environments the bunny could travel through. these were followed by UI designs for a potential home screen, then animation tests and a shop interface to imagine how the game might feel in motion.
</p>

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  marginBottom: '2rem'
}}>
  <img src="/images/artworks/bunnyloadinggif.gif" alt="Pink loading bunny animation" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/artworks/otherloadinggif.gif" alt="Alternate loading animation" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/artworks/blackloadingbunny.gif" alt="Black bunny loading animation" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/artworks/bunnyshop.png" alt="Main puzzle screen" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/projects/bunnygame.png" alt="Sand biome screen" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/artworks/bunnysandbiome.PNG" alt="Sand biome screen" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  <img src="/images/artworks/roughdemogif.gif" alt="Rough gameplay demo" style={{ width: '100%', maxWidth: '600px', gridColumn: 'span 2' }} />
  
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
