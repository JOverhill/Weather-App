import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column1, Column2, Column3, Img, ImgWrap } from './InfoElements'
import TimeAndLocation from '../TimeAndLocation/TimeAndLocation'
import TemperatureAndDetails from '../TimeAndLocation/TemperatureAndDetails'
import getFormattedWeatherData from '../../services/weatherService'
import Search from '../SearchBar/Search'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    const [query, setQuery] = useState({q: 'Helsinki'})
    const [units, setUnits] = useState('metric')
    const [weather, SetWeather] = useState(null)

     useEffect (() => {
        const fetchWeather = async () => {
        const message = query.q ? query.q : 'current location.'

        toast.info('Fetching weather for ' + message)

         await getFormattedWeatherData({...query, units}).then((data) => {

          toast.success(`Successfully fetched weather for ${data.country}`)  
          SetWeather(data);
          })
      }
      fetchWeather()
     }, [query, units])
  
  
    return (
    <> 
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    {weather && (
                    <>
                    <Column2>
                    <Search setQuery={setQuery} units={units} setUnits={setUnits}/>
                     <TimeAndLocation weather={weather} />
                    </Column2>
                    <Column3>
                    <TemperatureAndDetails weather={weather} />
                    </Column3>
                    </>
                    )}
                </InfoRow>    
            </InfoWrapper>    
        </InfoContainer>   
    
    <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    
    </>
  )
}

export default InfoSection