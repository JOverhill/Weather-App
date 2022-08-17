import React, {useState} from 'react'
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'
import { SearchBarContainer, SearchInput, SearchBarJatko, DegreeButton } from './SearchElements'
import {toast} from 'react-toastify'

//Destructuroidaan tähän kaikki tarvittavat propsit joita käytetään InfoSectionin index.js
const Search = ({ setQuery, units, setUnits}) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    //jos city ei ole tyhjä ->
    if (city !== '') setQuery({q: city})
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching user location.')
      navigator.geolocation.getCurrentPosition((position => {
        toast.success("Location fetched!")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat, lon})
      }))
    }
  }

  const handleUnitchange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit)
  }


  return (
    <>
    <SearchBarContainer>
      <SearchInput 
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      />
      <UilSearch style={{cursor: 'pointer'}} onClick={handleSearchClick} size={50} />
      <UilLocationPoint style={{cursor: 'pointer'}} onClick={handleLocationClick} size={50} />  
      <SearchBarJatko>
      <DegreeButton name="metric" onClick={handleUnitchange} >°C</DegreeButton>
      <p>|</p>
      <DegreeButton name="imperial" onClick={handleUnitchange}>°F</DegreeButton>
      </SearchBarJatko>
    </SearchBarContainer>
    </>
  )
}

export default Search