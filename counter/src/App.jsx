import React from 'react'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1)
  }

  const remove = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div>Counter : {counter}</div>

      <button onClick={add}>Increase</button>
      <button onClick={remove}>Decrease</button>
    </>
  )
}

export default App