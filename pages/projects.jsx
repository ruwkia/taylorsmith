import { useState } from 'react';
import projects from '../utils/projects.json';
import Image from 'next/image';

function Section({ section, selectedType }) {
  const { title, list } = section;
  const filteredList =
    selectedType === 'all'
      ? list
      : list.filter(item => item.type === selectedType);
  if (filteredList.length === 0) return null;

  return (
    <>
      <p><b>{title}</b></p>
      <div className="flex flex-row gap-2 flex-wrap justify-between">
        {filteredList.map((item, index) => {
          const { name, type, description, date, link, image } = item;
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
                  width={750}
                  height={500}
                  quality={100}                  
                  style={{ maxWidth: '100%', height: 'auto' }}  
                  className="w-full card mb-5 object-cover"
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
  // Hardcode filter types to show app and maintain order
  const allTypes = ['all', 'game', 'app'];

  return (
    <>
      {/* Intro paragraph above the filters */}
      <p>
        Take a look around! I often use Godot Engine, Blender, and Adobe Illustrator.
      </p>

      {/* Tiffany-style filter pills: selected is black, others are pink */}
      <nav className="flex flex-row gap-2 mt-4 mb-4">
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
