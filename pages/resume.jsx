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
            backgroundColor: '#E6E6FA', // lavender
            color: '#4B0082', // indigo text
            padding: '10px 24px',
            borderRadius: '9999px', // pill shape
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.25s ease',
            display: 'inline-block',
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = '#d8d8f0')
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = '#E6E6FA')
          }
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
