import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
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
      <a
        href="https://docs.google.com/document/d/1YdjOy1KYZt5Z5kuVaUidcfv1nVeEkFCNOTl06yKIpH0/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          marginTop: '1rem',
          textAlign: 'center',
          fontSize: '1rem',
          color: '#0077cc',
          textDecoration: 'underline',
        }}
      >
        Open in new tab ↗
      </a>
    </>
  );
}

export default Resume;
