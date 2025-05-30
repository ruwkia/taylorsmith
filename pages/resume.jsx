import { useState } from 'react'

function Resume() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <p>Loading... 🔎</p>}
      <iframe
        src="https://drive.google.com/file/d/1CmSczDHuM_wEpEXQGitHmdrUN9mzH8-8/preview"
        width="640"
        height="850"
        onLoad={() => setIsLoading(false)}
      />
    </>
  )
}
export default Resume
