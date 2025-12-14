import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/LandingPage/Navbar'
import Hero from './Components/LandingPage/Hero'
import Offer from './Components/LandingPage/Offer'
import SecondContent from './Components/LandingPage/SecondContent'
import Work from './Components/LandingPage/Work'

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
