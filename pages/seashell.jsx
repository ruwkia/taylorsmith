import React from 'react';

function Seashell() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
   <p style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>
  shoreline scavenger
</p>


      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        a relaxing shoreline scavenger game where you collect seashells before the day ends. grab sunscreen to extend your time on the beach, and watch out for crabs—they’ll slow you down! when the timer runs out, it’s time to head home.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img
          src="/images/artworks/shorelinehome.png"
          alt="Seashell Home Screenshot"
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
      created all pixel art assets using Pixelable on iPad, then scripted the game in Godot Engine.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem' }}>design process</p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        this project focuses on ambient gameplay and soft visuals. I wanted to build something gentle and self-paced, where players could enjoy small interactions and natural scenery without pressure.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginBottom: '2rem',
        alignItems: 'center'
      }}>
        <div style={{ overflow: 'hidden', width: '100%', maxWidth: '1450px' }}>
  <img
    src="/images/artworks/shorelinehome.gif"
    alt="Seashell Home Animation"
    style={{
      width: 'calc(100% + 50px)',
      marginRight: '-50px',
      display: 'block'
    }}
  />
</div>

        <img src="/images/artworks/shorelinegameplay.gif" alt="Seashell Gameplay" style={{ width: '150%', maxWidth: '1500px' }} />
      </div>

      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        shoreline scavenger blends simple collection mechanics with calming sound design and gentle animation to create a peaceful moment of play.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700' }}>play the game!</p>
      <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/2690729"
          width="552"
          height="167"
          title="Shoreline Scavenger"
          style={{ border: 'none', maxWidth: '100%' }}
        >
          <a href="https://cndles.itch.io/shoreline-scavenger">Shoreline Scavenger by cndles</a>
        </iframe>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cndles.itch.io/shoreline-scavenger"
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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, opacity 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1)';
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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, opacity 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ← back to projects
        </a>
      </div>
    </div>
  );
}

export default Seashell;
