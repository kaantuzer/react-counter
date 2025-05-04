import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sayac from './components/sayac'

function App() {
  const [count, setCount] = useState(0)

  function Increase(){
    setCount(count + 1)
}
function Decrease(){
    setCount(count - 1)
}
function Reset(){
    setCount(0)
}

  return (
    <>
      <Sayac 
      increase={Increase}
      decrease={Decrease}
      reset={Reset}
      count={count}
      ></Sayac>
    </>
  )
}

export default App
