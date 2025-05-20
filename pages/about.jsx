import { useState } from 'react';
import Image from 'next/image';
import Url from '../components/Url';

function About() {
  const [isHovering, setIsHovering] = useState(false);
  const onHover = () => setIsHovering(true);
  const onLeave = () => setIsHovering(false);

  const getProfileSection = () => {
    if (isHovering) {
      return (
        <>
          <Image src='/images/milo.png' width={300} height={195} onMouseLeave={onLeave} quality={100} className="my-image" />
          This is my dog, Milo!
        </>
      )
    } else {
      return (
        <>
          <Image src='/images/me.jpg' width={300} height={195} onMouseEnter={onHover} quality={100} className="my-image" />
          Me!
        </>
      )
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <p>{getProfileSection()}</p>
      <br />
      <p>
        <b>About me</b>
        <br /><br />
        Hi, I'm Taylor!
        <br /><br />
        I am originally from Atlanta, GA, but now I call Charlottesville, VA home. I'm a senior at Penn State University, majoring in Digital Arts and Media Design.
        <br /><br />
         I like to create digital paintings, make games, 3D model, animate, etc. 
        <br /><br />
        I care about social impact & creative technology. I love dabbling in as many disciplines as possible, learning by experimenting, and building unique experiences. I also love collaborations!
        <br />
      </p>
      <br />
      <p>
        <b>Previously, I...</b>
      </p>
      <ul className="list-disc list-inside">
        <li> Created my own 
          <a href="https://www.linkedin.com/in/tayrsmith/details/projects/" target="_blank" rel="noopener noreferrer">rhythm game! ♫⋆｡♪ ₊˚♬ ﾟ. </a> 
            </li>                   
        <li>
          Worked with a team to create an immersive VR experience, 
           <a href="https://youtu.be/bJZfQfwQ78Q?si=JaYS-eD3R8cW2XYY" target="_blank" rel="noopener noreferrer"> Nautilus</a>
        </li>
        <li>
          Interned at Penn State Sustainability for a year, focusing on graphic design and social media management
          </li>
        <li>
          Collaborated with my best friend on a game, 
           <a href="https://cndles.itch.io/space-control" target="_blank" rel="noopener noreferrer">Space Control</a>, available on itch.io
          </li>
      </ul>
      <p>
        <br />
        <b>✧･ﾟ: *✧･ﾟ:*</b>
        <br /><br />
        Want to reach out? Feel free to email me at <b>tayrain333 at gmail dot com</b> 📬. 
      </p>
    </div>
  )
}

export default About
