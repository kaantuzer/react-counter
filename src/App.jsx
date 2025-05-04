import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sayac from './components/sayac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sayac></Sayac>
    </>
  )
}

export default App
