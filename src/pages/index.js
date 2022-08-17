import React, {useState, useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

//import getFormattedWeatherData from '../services/weatherService'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle ={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
    </>    
  )
}

export default Home