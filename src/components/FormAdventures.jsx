import React from 'react'
import { useEffect } from 'react'
import { FormAdventuresInputs } from './FormAdventuresInputs'

export const FormAdventures = (
    {
        data,
        adventure,
        setAdventures,
        selectedCharacter,
        setSelectedCharacter,
        query,
        setQuery,
        setCharacterFilter
    }) => {


    const createNewAdventure = (event) => {
        event.preventDefault();
        let searchInfoCharacter = data.filter((item) => (item.name === event.target[3].value));
        const infoAdventure =
        {
            'id': searchInfoCharacter[0].id,
            'adventureName': event.target[0].value,
            'origin': event.target[1].value,
            'destination': event.target[2].value,
            'characterName': searchInfoCharacter[0].name,
            'characterRace': searchInfoCharacter[0].race
        }
        setAdventures([ ...adventure, infoAdventure ]);
    }

    useEffect(() => {
        localStorage.setItem('CHARACTERS', JSON.stringify(adventure));
        let dataFilter = JSON.parse(localStorage.getItem('CHARACTERS'));
        setCharacterFilter(dataFilter);
    }, [ adventure ]);

    return (
        <form onSubmit={ createNewAdventure } className='flex flex-col justify-between h-5/6'>
            <FormAdventuresInputs
                data={ data }
                selectedCharacter={ selectedCharacter }
                setSelectedCharacter={ setSelectedCharacter }
                query={ query }
                setQuery={ setQuery }
            />
            <button type="submit" className='button-create h-10'>Create</button>
        </form>
    )
}
