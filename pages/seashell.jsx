import React from 'react';

function Seashell() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(0, 0, 0, 0.85)' }}>
      <h1 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>
        seashell
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        an interactive experience about memory, distance, and listening. seashell invites players to explore a nostalgic shoreline while tuning into fragmented voices from the past.
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
        designed the environment in Blender and scripted all mechanics in Godot Engine. also created voiceovers and sound integration.
      </p>

      <p style={{ fontSize: '1rem', fontWeight: '700', marginTop: '2rem' }}>design process</p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        seashell was built as a mood-driven experience, where audio fragments guide the story rather than text. experimenting with environmental storytelling, I blended subtle animation, nonlinear dialogue, and low-poly aesthetics to evoke a sense of quiet reflection.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginBottom: '2rem',
        alignItems: 'center'
      }}>
        <img src="/images/artworks/shorelinehome.gif" alt="Seashell Home Animation" style={{ width: '150%', maxWidth: '1500px' }} />
        <img src="/images/artworks/shorelinegameplay.gif" alt="Seashell Gameplay" style={{ width: '150%', maxWidth: '1500px' }} />
      </div>

      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        the project explores themes of emotional resonance and ephemeral memory—using sound design, ambient visuals, and layered interactions to shape the story.
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

