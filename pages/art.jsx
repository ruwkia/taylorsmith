import artSections from '../utils/art.json'
import Image from 'next/image'
function Section({ section }) {
  const { title, list } = section;

  function autolink(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      const displayUrl = url.replace(/^https?:\/\/www./, '').replace(/\/$/, '');
      return `<a href="${url}" target="_blank" class="underline" rel="noopener noreferrer">${displayUrl}</a>`;
    });
  }

  return (
    <>
      <b><p>•───────• {title} •───────•</p></b>
      {list.map((art, index) => (
        <div key={index} className="flex flex-col w-full md:w-[80%] mb-10">
          <p>[<span dangerouslySetInnerHTML={{ __html: autolink(art.title) }} />]</p>
          <div className="flex w-full justify-between gap-2">
            {art.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={art.title}
                style={{
                  width: `calc(100% / ${art.images.length})`,
                  height: 'auto'
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function Art() {
  return (
    <div className="flex flex-col gap-2">
      {artSections.map((section, index) => <Section key={index} section={section} />)}
    </div>
  )
}

export default Art
