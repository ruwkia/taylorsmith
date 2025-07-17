import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <iframe
        src="/images/Taylor%20Smith%20Resume%20%2813%29-1.png"
        style={{
          display: 'block',
          width: '100%',
          height: '100vh',   // or '100vh' if you prefer
          border: 'none',
        }}
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default Resume;
