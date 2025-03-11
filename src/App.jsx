import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Category from './components/Category'
import TrendingProducts from './components/TrendingProducts'
import Gallery from './components/Gallery'
import Client from './components/Client'
import Sell from './components/Sell'
import Description from './components/Description'

function App() {
 

  return (
    <>
      <HeroSection/>
      <Category/>
      <TrendingProducts/>
      <Gallery/>
      <Client/>
    <Sell/>
    <Description/>
    <TrendingProducts/>
    </>
  )
}

export default App
