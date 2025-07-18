import { useEffect } from 'react';

function BunnyPuzzle() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>
        bunny puzzles
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        bunny puzzles is a cozy mobile game concept where you rotate pipes to create a clear path for water before the timer runs out—or before it spills. completing levels unlocks new bunny characters to collect!
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img 
          className="fade-in"
          src="/images/artworks/IMG_0245.png"
          alt="Bunny Puzzle Screenshot" 
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'block',
            margin: '0 auto',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
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
        {[
          { src: '/images/artworks/bunnyappicon.png', alt: 'App icon design' },
          { src: '/images/artworks/Artboard 1.png', alt: 'Design process sketch' },
          { src: '/images/artworks/bunnyinfo.png', alt: 'Plot summary' }
        ].map(({ src, alt }, i) => (
          <img
            key={i}
            className="fade-in"
            src={src}
            alt={alt}
            style={{
              width: '100%',
              maxWidth: '600px',
              gridColumn: 'span 2',
              display: 'block',
              margin: '0 auto',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          />
        ))}
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
        {[
          '/images/artworks/bunnyloadinggif.gif',
          '/images/artworks/otherloadinggif.gif',
          '/images/artworks/blackloadingbunny.gif',
          '/images/artworks/bunnyshop.png',
          '/images/projects/bunnygame.png',
          '/images/artworks/bunnysandbiome.PNG',
          '/images/artworks/roughdemogif.gif'
        ].map((src, i) => (
          <img
            key={i}
            className="fade-in"
            src={src}
            alt=""
            style={{
              width: '100%',
              maxWidth: '600px',
              gridColumn: 'span 2',
              display: 'block',
              margin: '0 auto',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          />
        ))}
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
