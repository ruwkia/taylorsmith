import { useState } from 'react';
import projects from '../utils/projects.json';
import Image from 'next/image';

function Section({ section, selectedType }) {
  const { title, list } = section;
  const filteredList =
    selectedType === 'all'
      ? list
      : list.filter(item => item.type === selectedType);
  if (!filteredList.length) return null;

  return (
    <>
      <p><b>{title}</b></p>
      <div className="flex flex-row gap-2 flex-wrap justify-between">
        {filteredList.map((item, index) => {
          const { name, type, description, date, link, image } = item;
          // Check for Nature’s Song by its image filename
          const isNature = image.includes('natures_song.png');
          // Set dimensions
          const imgWidth = isNature ? 512 : 750;
          const imgHeight = isNature ? 288 : 500;
          // Conditional styling: no full width for Nature’s Song
          const imgClass = isNature ? 'card mb-5 object-cover' : 'w-full card mb-5 object-cover';
          const imgStyle = isNature
            ? { width: imgWidth, height: imgHeight }
            : { maxWidth: '100%', height: 'auto' };

          return (
            <div key={index} className="flex flex-col mb-10">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                <Image
                  src={image}
                  alt={name}
                  width={imgWidth}
                  height={imgHeight}
                  quality={100}
                  className={imgClass}
                  style={imgStyle}
                />
              </a>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {name}
              </a>
              <p>{type} / {date}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function Projects() {
  const sections = projects['projects'];
  const [selectedType, setSelectedType] = useState('all');
  const allTypes = ['all', 'game', 'app'];

  return (
    <>
      <p>Take a look around! I often use Godot Engine, Blender, and Adobe Illustrator.</p>
      <nav className="flex flex-row gap-2 mt-4 mb-4">
        {allTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={
              selectedType === type
                ? 'px-2 py-1 bg-[#EBA1C2] text-[#FED4EA] rounded-md text-sm font-mono'
                : 'px-2 py-1 bg-pink-200 text-black rounded-md text-sm font-mono'
            }
          >
            [{type}]
          </button>
        ))}
      </nav>
      <div className="flex flex-col gap-4 mt-4">
        {sections.map((section, index) => (
          <Section
            key={index}
            section={section}
            selectedType={selectedType}
          />
        ))}
      </div>
    </>
  );
}
