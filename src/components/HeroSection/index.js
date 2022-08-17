import React, {useState} from 'react'
import Video from '../../assets/bgvideo.mp4'
import {Button} from '../ButtonElements'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Weather app by Jiri Ylimäki</HeroH1>
            <HeroP>
                Get real time weather data for your location
            </HeroP>
            <HeroP>
                Site built with ReactJS using Openweathermap's API
            </HeroP>
            <HeroBtnWrapper>
                <Button to="weather" onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    Check your weather {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection