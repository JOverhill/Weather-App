import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 6px;
    margin-bottom: 6px;
`

export const SearchInput = styled.input.attrs({
    type: 'text',
    placeholder: 'Search a city...'
})`
    font-size: large;
    font-weight: lighter;
    width: 100%;
    box-shadow: 3px;

    :focus {
        outline: none;
    }   
`
export const SearchBarJatko = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    width: 25%;
    align-items: center;
    justify-content: center;

`
export const DegreeButton = styled.button`
    padding: 10px;
    font-size: large;
    font-weight: lighter;
    color: white;
    background-color: #010606;
    cursor: pointer;
    border: none;

    :hover {
        transition: all 0.5s ease-out;
        scale: 1.4;
    }
`
