import { useState } from 'react';
import artSections from '../utils/art.json';
import Image from 'next/image';

function Section({ section }) {
  const { title, list } = section;

  function autolink(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      const displayUrl = url.replace(/^https?:\/\/www\./, '').replace(/\/$/, '');
      return `<a href="${url}" target="_blank" class="underline" rel="noopener noreferrer">${displayUrl}</a>`;
    });
  }

  return (
    <>
      <b><p>•───────• {title} •───────•</p></b>
      {list.map((art, index) => (
        <div key={index} className="flex flex-col w-full md:w-[80%] mb-10">
          {/* Images row */}
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
          {/* Title below images */}
          <p className="mt-2">[<span dangerouslySetInnerHTML={{ __html: autolink(art.title) }} />]</p>
        </div>
      ))}
    </>
  );
}

export default function Art() {
  const [selectedType, setSelectedType] = useState(artSections[0].title);
  const allTypes = artSections.map(section => section.title);

  return (
    <div className="flex flex-col gap-2">
      <p>I often use Procreate, Blender, After Effects.</p>
      <nav className="flex flex-row gap-2 mt-2 mb-4">
        {allTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={
              selectedType === type
                ? 'px-2 py-1 bg-black text-white rounded-md text-sm font-mono'
                : 'px-2 py-1 bg-pink-200 text-black rounded-md text-sm font-mono'
            }
          >
            [{type}]
          </button>
        ))}
      </nav>
      {artSections.map((section, index) => (
        section.title === selectedType && <Section key={index} section={section} />
      ))}
    </div>
  );
}
