import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <iframe
        src="https://docs.google.com/document/d/1YdjOy1KYZt5Z5kuVaUidcfv1nVeEkFCNOTl06yKIpH0/preview"
        style={{
          display: 'block',
          width: '100%',
          height: '90vh',   // or '100vh' if you prefer
          border: 'none',
        }}
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default Resume;
