import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/Taylor%20Smith%20Resume%20%2813%29-1.png"
          alt="Taylor Smith Resume"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
}

export default Resume;
