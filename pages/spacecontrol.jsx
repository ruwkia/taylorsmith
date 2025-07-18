import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SpaceControl() {
  return (
    <div className="body mx-6 sm:mx-32 mt-12 text-[16px] font-normal font-[IBM Plex Mono]">
      <h1 className="text-[16px] font-bold">space control</h1>

      <p className="mt-4">
        Face the battle of complacency and morality as you repair your broken spaceship in this short narrative sci-fi game.
      </p>

      <div className="my-6">
        <Image
          src="/images/projects/space_control.png"
          alt="space control"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>

      <h2 className="text-[16px] font-bold">tools & role</h2>
      <p className="mt-2">
        Wrote the game narrative and developed it using Godot Engine.
      </p>

      <h2 className="text-[16px] font-bold mt-6">play demo</h2>
      <div className="mt-2">
        <iframe
          src="https://itch.io/embed/2690772"
          width="552"
          height="167"
          frameBorder="0"
        >
          <a href="https://cndles.itch.io/space-control">Space Control by cndles</a>
        </iframe>
      </div>

      <div className="mt-8">
        <Link href="/projects">
          <button className="bg-[#FEC2AE] text-[#F9A8A8] text-[16px] px-4 py-2 rounded-full hover:opacity-70 transition">
            ← back to projects
          </button>
        </Link>
      </div>
    </div>
  );
}
