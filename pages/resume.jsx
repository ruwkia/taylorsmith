import { useState } from 'react'
import Url from '../components/Url'

function Resume() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="mb-4">
        { isLoading ? <p>Loading... 🔎</p> : <p></p> }
      </div>
      <iframe src="https://docs.google.com/document/d/1FtrwxisIU5oLhNTu9OxkLvODMA6chJUChxgKIXpkNSQ/preview?tab=t.0" width="640" height="850" allow="autoplay" onLoad={() => setIsLoading(false)} />
    </>
  );
}

export default Resume
