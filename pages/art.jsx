import { useState } from 'react';
import artSections from '../utils/art.json';
import Image from 'next/image';

function Section({ section }) {
  const { title, list } = section;
  const is3d = title.toLowerCase() === '3d';

  function autolink(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      const displayUrl = url.replace(/^https?:\/\/www\./, '').replace(/\/$/, '');
      return `<a href=\"${url}\" target=\"_blank\" class=\"underline\" rel=\"noopener noreferrer\">${displayUrl}</a>`;
    });
  }

  return (
    <>
      <div className="flex flex-row gap-4 flex-wrap justify-between">
        {list.map((art, index) => {
          const { title: artTitle, images, description } = art;
          const containerWidthClass = is3d ? 'md:w-[100%]' : 'md:w-[80%]';
          return (
            <div
              key={index}
              className={`flex flex-col w-full ${containerWidthClass} mb-10`}
            >
              {/* Media row without outlines */}
              <div className="flex w-full justify-between gap-2">
                {images.map((src, imgIndex) => {
                  const isGif = src.toLowerCase().endsWith('.gif');
                  return isGif ? (
                    <img
                      key={imgIndex}
                      src={src}
                      alt={artTitle}
                      className="object-cover"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <Image
                      key={imgIndex}
                      src={src}
                      alt={artTitle}
                      width={is3d ? 1200 : 800}
                      height={is3d ? 900 : 600}
                      quality={100}
                      className="object-cover"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  );
                })}
              </div>
              {/* Title directly beneath media, no extra gap */}
              <p className="mt-1 lowercase">
                [<span dangerouslySetInnerHTML={{ __html: autolink(artTitle) }} />]
              </p>
              {description && <p className="mt-1 text-sm">{description}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function Art() {
  const [selectedType, setSelectedType] = useState(artSections[0].title);
  const allTypes = artSections.map(section => section.title);

  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-base">I often use Procreate, Blender, After Effects.</p>
      <nav className="flex gap-2 mb-4">
        {allTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={
              selectedType === type
                ? 'px-3 py-1 bg-[#EBA1C2] text-[#FED4EA] rounded-md text-sm font-mono'
                : 'px-3 py-1 bg-pink-200 text-black rounded-md text-sm font-mono'
            }
          >
            [{type}]
          </button>
        ))}
      </nav>
      {artSections.map((section, idx) =>
        section.title === selectedType ? <Section key={idx} section={section} /> : null
      )}
    </div>
  );
}
