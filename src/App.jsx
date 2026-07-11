import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import SearchReg from './components/SearchReg'
import DeleteReg from './components/DeleteReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddReg />
      <SearchReg />
      <DeleteReg />
      

    </>
  )
}

export default App
