import { useState } from 'react'
import './App.css'
import AnimalShow from './components/AnimalShow.jsx'

function App() {
  function getRandomAnimal() {
    const animals = ["cat", "dog", "cow", "gator", "bird", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  const [selectedAnimal, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...selectedAnimal, getRandomAnimal()]);
  }

  const renderedAnimal = selectedAnimal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="App">
      <button onClick={handleClick}>Add Random Animal</button>
      <p>{selectedAnimal}</p>
      <div className='animal-list'>{renderedAnimal}</div>
    </div>
  )
}

export default App
