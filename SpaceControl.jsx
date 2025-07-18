import React from 'react';

function SpaceControl() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>
        space control
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        face the battle of complacency and morality as you repair your broken spaceship. this short narrative game explores decision-making under pressure.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img
          src="/images/projects/space_control.png"
          alt="Space Control Screenshot"
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem' }}>tools & role</p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        wrote, designed, and programmed the game in Godot Engine. designed the environment in Blender.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem' }}>design process</p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        this project began with a character idea and quickly expanded into a collection of scripted mini-games tied together through narrative. i scripted all gameplay logic, designed the entire environment, and co-wrote the story — including the concept of unknowingly working for an evil company.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <img src="/images/artworks/spacecontrolhope.png" alt="Hope screen" style={{ width: '100%' }} />
        <img src="/images/artworks/spacecontrolleave.png" alt="Leave screen" style={{ width: '100%' }} />
        <img src="/images/artworks/spacecontroltopsecret.png" alt="Top Secret screen" style={{ width: '100%' }} />
        <img src="/images/artworks/spacecontrolsus.png" alt="Suspicious screen" style={{ width: '100%' }} />
        <img src="/images/artworks/spacecontrolpuzzle.png" alt="Puzzle screen" style={{ width: '100%', gridColumn: 'span 2' }} />
        <img src="/images/artworks/spacecontrolslider.png" alt="Slider interface" style={{ width: '100%', gridColumn: 'span 2' }} />
        <img src="/images/artworks/spacecontrolemail.png" alt="Email screen" style={{ width: '100%', gridColumn: 'span 2' }} />
      </div>

      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        each scene was created to balance visual storytelling with interactive pressure — blending eerie overlays, distorted interfaces, and decision-making elements into one short but unsettling game.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700' }}>play the game!</p>
      <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        <iframe
          width="552"
          height="167"
          frameBorder="0"
          src="https://itch.io/embed/2690772"
          title="Space Control"
          style={{ border: 'none', maxWidth: '100%' }}
        >
          <a href="https://cndles.itch.io/space-control">space control by cndles</a>
        </iframe>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/space-control"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#E6E6FA',
            color: '#BFA7C5',
            padding: '10px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '1rem',
            display: 'inline-block',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
          }}
        >
          play on itch.io ↗
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default SpaceControl;
