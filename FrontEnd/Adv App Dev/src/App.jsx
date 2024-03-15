import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
