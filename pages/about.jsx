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
        Hi! I'm Taylor!
        <br /><br />
        I am originally from Atlanta, GA. I live in Charlottesville, VA now and I am a 4th year Digital Arts and Media Design major.
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
        <li>Worked with a team to create an immersive VR experience</li>
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
