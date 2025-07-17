import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <iframe
        src="/images/Taylor%20Smith%20Resume%20%2813%29-1.png"
        style={{
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        }}
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default Resume;
