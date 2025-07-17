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
            color: '#4B0082', // indigo text for contrast
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = '#d8d8f0') // slightly darker on hover
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = '#E6E6FA')
          }
        >
          Open resume in full screen ↗
        </a>
      </div>

      {isLoading && <p>Loading... 🔎</p>}

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
