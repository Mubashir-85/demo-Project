import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Offer from './Components/Offer'
import SecondContent from './Components/SecondContent'
import Work from './Components/Work'

function App() {
  const [select, setSelect]=useState("home")


  return (
    <>
    <Navbar select={select} setSelect={setSelect}/>
    <Hero/>
    <Offer/>
    <SecondContent/>
    <Work/>
    </>
  )
}

export default App
