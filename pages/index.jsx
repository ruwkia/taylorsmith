import { useEffect, useState } from 'react'
import Url from '../components/Url'

const words = {
  drinks: ['iced matcha latte', 'lemonade', 'brown sugar boba tea', 'water', 'hot chocolate'],
  hobbies: ['playing video games', 'eating the spiciest foods on the planet', 'beating my friends in golf', 'talking about the idea of going to the gym']
}
const drinksEmoji = ['🍵', '🍋', '🧋', '🧊', '🍫']
const greeting = 'hi, i\'m taylor!'

function Home() {
  // generate initial state for words dictionary
  const initialWordsState = Object.fromEntries(Object.keys(words).map(key => [key, 0]))
  const [wordsState, setWordsState] = useState(initialWordsState)

  useEffect(() => {
    // set drink to random
    const randomDrinkIndex = Math.floor(Math.random() * words.drinks.length)
    const randomHobbyIndex = Math.floor(Math.random() * words.hobbies.length)
    setWordsState({ ...wordsState, drinks: randomDrinkIndex, hobbies: randomHobbyIndex })
  }, [])
  
  let greetingCharacters = []
  for (let i = 0; i < greeting.length; i++) {
    const char = greeting[i]
    greetingCharacters.push(char == ' ' ? '\u00A0' : char)
  }

  function incrementWords(key) {
    const index = wordsState[key]
    const length = words[key].length
    const nextIndex = (index + 1) % length
    setWordsState({...wordsState, [key]: nextIndex})
  }

  function PlayLink({ type }) {
    return (
      <a className="link play" onClick={() => incrementWords(type)}>
        {words[type][wordsState[type]]}
      </a>
    )
  }

  return (
    <>
      <h1 className="font-outline-1 pt-10 pb-5 text-center">
        <span className="wave">
          {greetingCharacters.map((letter, index) => (<span key={index}>{letter}</span>))}
        </span>
      </h1>
      <br />
      <p>
        <b>Welcome to my website ⋆⭒˚.⋆.</b> Grab yourself something to drink. I have a mini fridge full of{' '}
        <PlayLink type="drinks" />
        {' '}{drinksEmoji[wordsState['drinks']]}.
        <br /><br />
        I'm an artist. I study Digital Arts and Media Design (DART) at Penn State University. I like iced matcha lattes, art, and <PlayLink type="hobbies" />.
        <br /><br />
        Reach out anytime at <b>tayrain333 at gmail dot com</b>.
        <br /><br />
        Else, find me at: <Url href="https://www.linkedin.com/in/taylor-smith-531b87251/">Linkedin</Url>, <Url href="https://github.com/ruwkia">GitHub</Url>
        <br />
      </p>
    </>
  )
}

export default Home
