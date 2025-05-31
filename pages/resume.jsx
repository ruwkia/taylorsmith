import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <iframe
        src="https://drive.google.com/file/d/1CmSczDHuM_wEpEXQGitHmdrUN9mzH8-8/preview"
        style={{
          display: 'block',
          width: '100%',
          height: '100vh',  // fill the full viewport height
          border: 'none',
        }}
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default Resume;
