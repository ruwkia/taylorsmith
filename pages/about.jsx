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
        I am originally from Atlanta, GA, and recently graduated from Penn State University with a degree in Digital Arts and Media Design. 
        <br /><br />
        I love creating digital paintings, designing games, 3D modeling, animation, and more.
        <br /><br />
        I'm passionate about using creative technology for social impacy, experimenting across disciplines, and building unique experiences. I also love collaborations!
        <br />
      </p>
      <br />
      <p>
        <b>Previously, I...</b>
      </p>
      <ul className="list-disc list-inside">
        <li> Created my own 
         <a className="link" href="https://youtu.be/QQdM6xn_3IQ" target="_blank" rel="noopener noreferrer"> rhythm game! ♫⋆｡♪ ₊˚♬ ﾟ.</a>
            </li>                   
        <li>
          Worked with a team to create an immersive VR experience, 
           <a className="link" href="https://youtu.be/bJZfQfwQ78Q?si=JaYS-eD3R8cW2XYY" target="_blank" rel="noopener noreferrer"> Nautilus</a>
        </li>
        <li>
          Interned at Penn State Sustainability for a year, focusing on graphic design and social media management
          </li>
        <li>
          Collaborated with my best friend on a game, 
           <a className="link" href="https://cndles.itch.io/space-control" target="_blank" rel="noopener noreferrer"> Space Control</a>, available on itch.io
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
