import { useState } from 'react'
import './App.css'
import Routermain from './Router/Routermain'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routermain/>
    </>
  )
}

export default App
