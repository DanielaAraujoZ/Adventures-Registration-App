import React from 'react'
import imageAdventure from '../assets/placeholder.png'

export const ListCharacterFilter = ({ id, characterName, characterRace }) => {

    return (
        <button className='option-filter flex gap-2 h-14 mb-3 py-2 px-1 rounded cursor-pointer w-full' >
            <img className='h-10 rounded-lg' src={ imageAdventure } alt="image-adventure" />
            <div className='flex flex-col'>
                <p className='info-item-dark text-base font-medium'>{ characterName }</p>
                <p className='info-item-gray text-sm'> { characterRace} </p>
            </div>
        </button>
    )
}
