import { useState } from 'react';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <p className="mb-4">Loading... 🔎</p>
      )}
      <iframe
        src="https://drive.google.com/file/d/1CmSczDHuM_wEpEXQGitHmdrUN9mzH8-8/preview"
        width="100%"
        height="90vh"
        allow="autoplay"
        style={{ border: 'none' }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default Resume;
