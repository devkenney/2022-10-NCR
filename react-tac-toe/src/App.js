import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  const [evenCounter, setEvenCounter] = useState(0)

  useEffect(() => {
    const effect = () => {
      console.log("I'm just a random log")
    }
    effect()
  }, [evenCounter])

  const addOne = () => {
    setCounter(counter + 1)

    if (counter % 2 === 0) {
      setEvenCounter(evenCounter + 1)
    }
  }

  const colors = [
    {
      name: "blue",
      type: "cool"
    },
    {
      name: "red",
      type: "warm"
    },
    {
      name: "orange",
      type: "warm"
    },
    {
      name: "green",
      type: "cool"
    }
  ]

  const wise = {
    difficulty: "hard",
    length: "18 weeks",
    languageLearned: "JavaScript"
  }

  return (
    <div className="App">

      {colors.map((color) => {
        return (
          <div>
            Name: {color.name}
            <br />
            Type: {color.type}
            <br />
          </div>
        )
      })}

      <h2>WISE info</h2>

      {Object.keys(wise).map((key) => {
        return (
          <div>
            {key}: {wise[key]}
          </div>
        )
      })}

      <h2>Counter:</h2>
      <h3>{counter}</h3>
      <h2>Even Counter:</h2>
      <h3>{evenCounter}</h3>
      <button onClick={addOne}>Click me to add one to the counter!</button>

    </div>
  );
}

export default App;
