import React from 'react'
import { DataContainer, DataWrapper, Temperature, DataColumns, DataItems, ItemSpan } from './TalElements'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../../services/weatherService'

const TemperatureAndDetails = ({weather:{
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) => {
  return (
    <>
    <DataContainer>
        <p>{details}</p>
    </DataContainer>
    <DataWrapper>
        <img src={iconUrlFromCode(icon)} alt="" />
        <Temperature>{`${temp.toFixed()}°`}</Temperature>
        <DataColumns>
           <DataItems> 
                <UilTemperature/>
                Feels like:
                <ItemSpan>{`${feels_like.toFixed()}°`}</ItemSpan>
            </DataItems> 
            <DataItems>
                <UilTear/>
                Humidity:
                <ItemSpan>{`${humidity.toFixed()}°`}</ItemSpan>
            </DataItems>    
            <DataItems>
                <UilWind/>
                Wind:
                <ItemSpan>{`${speed.toFixed()} km/h`}</ItemSpan>
            </DataItems>
            <DataItems>
            <UilSun />
            Rise: <ItemSpan>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</ItemSpan>
            </DataItems>

            <DataItems>
            <UilSunset />
            Set: <ItemSpan>{formatToLocalTime(sunset, timezone, "hh:mm a")}</ItemSpan>
            </DataItems> 
        </DataColumns>
    </DataWrapper>
    </>
  )
}

export default TemperatureAndDetails