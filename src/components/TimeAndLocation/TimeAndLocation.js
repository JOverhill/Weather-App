import React from 'react'
import { formatToLocalTime } from '../../services/weatherService'
import { DataContainer, Times, DataContainerSmall, Location } from './TalElements'

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
    <>
        <DataContainer>
          <Times>
            {formatToLocalTime(dt, timezone)}
          </Times>   
        </DataContainer>
        <DataContainerSmall>
          <Location>
            {`${name}, ${country}`}
          </Location>
        </DataContainerSmall>
    </>
  )
}

export default TimeAndLocation