import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <iframe
        src="https://drive.google.com/file/d/1CmSczDHuM_wEpEXQGitHmdrUN9mzH8-8/preview"
        style={{
          display: 'block',     // make it fill the container
          width: '100%',        // full width
          height: '1000px',     // or '90vh' / whatever you need
          border: 'none',
        }}
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default Resume;
