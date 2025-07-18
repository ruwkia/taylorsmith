import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <a
          href="https://docs.google.com/document/d/1YdjOy1KYZt5Z5kuVaUidcfv1nVeEkFCNOTl06yKIpH0/preview"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(to right, #E6E6FA, #FED4EA)', // lavender to soft pink
            color: '#BFA7C5', // soft purple text
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
          open resume in full screen ↗
        </a>
      </div>

      {isLoading && <p style={{ textAlign: 'center' }}>Loading... 🔎</p>}

      <iframe
        src="https://docs.google.com/document/d/1YdjOy1KYZt5Z5kuVaUidcfv1nVeEkFCNOTl06yKIpH0/preview"
        width="100%"
        height="900"
        allow="autoplay"
        style={{ border: 'none' }}
        onLoad={() => setIsLoading(false)}
        title="Taylor Smith Resume"
      />
    </>
  );
}

export default Resume;
